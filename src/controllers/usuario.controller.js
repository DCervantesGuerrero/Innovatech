import usuario from "../models/usuario.models.js";
import bcrypt from 'bcryptjs';

export const getUsuarios = async (req, res) => {
    const usuarios = await usuario.find({});
    res.json(usuarios);
};

export const createUsuario = async (req, res) => {
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

        res.status(200).json({
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

export const updateUsuario = async (req, res) => {
    try {
        const usuarios = await usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuarios) return res.status(404).json({ message: "User not found" });
        return res.sendStatus(204);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

export const deleteUsuario = async (req,res) => {
    try {
        const usuarios = await usuario.findByIdAndDelete(req.params.id);
        if (!usuarios) return res.status(404).json({ message: "User not found!" });
 
        return res.sendStatus(204);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

export const addPhone = async (req,res) => {};
export const removePhone = async (req,res) => {};
export const changePassword = async (req,res) => {};
export const changeEmail = async (req,res) => {};