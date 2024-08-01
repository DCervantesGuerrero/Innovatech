import usuario from "../models/usuario.models.js";
import bcrypt from 'bcryptjs';
import { createAccessToken } from "../libs/jwt.js";


export const register = async (req, res) => {
    const { usuario_correo, usuario_contrasena, usuario_nombre, usuario_apellido, usuario_apellido_2, usuario_fecnac,
        usuario_telefono, usuario_direccion, usuario_mapago, usuario_role } = req.body;
    try {

        const passwordHash = await bcrypt.hash(usuario_contrasena, 10);
        const newUser = new usuario({
            usuario_nombre, usuario_apellido, usuario_apellido_2, usuario_fecnac, usuario_correo,
            usuario_telefono, usuario_direccion, usuario_mapago, usuario_role,
            usuario_contrasena: passwordHash
        });

        const userSaved = await newUser.save();

        const token = await createAccessToken({ id: userSaved._id });
        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            usuario_nombre: userSaved.usuario_nombre,
            usuario_correo: userSaved.usuario_correo,
            usuario_role: userSaved.usuario_role,
            createdAt: usuario_nombre.createdAt,
            updatedAt: userSaved.updatedAt
        });

    } catch (error) {
        console.error(error);
        res.json(error);
    }
};

export const logout = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0)
    });
    return res.sendStatus(200);
};


export const profile = async (req, res) => {
    try {
        const userId = req.user.id; // Asegúrate de obtener el ID del usuario desde el token o de alguna otra manera
        const userFound = await usuario.findById(userId);

        if (!userFound) {
            return res.status(404).json({ message: "User not found" });
        }

        if (userFound.usuario_role === 0) {
            return res.status(200).json({
                message: "Welcome Admin! :D",
                id: userFound._id,
                usuario_nombre: userFound.usuario_nombre,
                usuario_correo: userFound.usuario_correo
            });
        }

        if (userFound.usuario_role === 1) {
            return res.status(200).json({
                message: "Welcome user! :D",
                usuario_nombre: userFound.usuario_nombre
            });
        }

        // Si el rol del usuario no es ni 0 ni 1
        res.status(400).json({ message: "Invalid user role" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


export const login = async (req, res) => {
    try {
        const { usuario_correo, usuario_contrasena } = req.body;
        const userFound = await usuario.findOne({ usuario_correo });

        if (!userFound) {
            return res.status(400).json({ message: ["The usuario_correo doesn't exists"] });
        }

        const isMatch = await bcrypt.compare(usuario_contrasena, userFound.usuario_contrasena);
        if (!isMatch) {
            return res.status(400).json({ message: ["The password is incorrect"] });
        }

        const token = await createAccessToken({ id: userFound._id, usuario_nombre: userFound.usuario_nombre });

        res.cookie("token", token, { httpOnly: process.env.NODE_ENV !== "development", secure: true, sameSite: "none" });

        if (userFound.usuario_role == 0) {
            return res.status(200).json({ message: ["Welcome Admin! :D"] });
        };

        res.status(200).json({
            message: ["Welcome User! :D"],
            id: userFound._id,
            usuario_nombre: userFound.usuario_nombre,
            usuario_correo: userFound.usuario_correo
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });

    };

};