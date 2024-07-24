import usuarioModels from "../models/usuario.models.js";

export const getUsuario = async(req,res) =>{
    const usuarios = await usuarioModels.find({});
    res.json(usuarios);
}
