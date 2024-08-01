import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';
import Usuario from "../models/usuario.models.js"


export const AuthToken = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: "No token, autorization denied" });
    }

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });

};

export const verifyAdmin = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, TOKEN_SECRET);
        req.user = decoded;

        const user = await Usuario.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.usuario_role === 0) {
            console.log("User is admin");
            next();
        } else {
            console.log("User isn't an admin");
            return res.status(401).json({ message: "User isn't an Administrator" });
        }
    } catch (err) {
        console.log("Invalid token", err);
        return res.status(403).json({ message: "Invalid token" });
    }
};