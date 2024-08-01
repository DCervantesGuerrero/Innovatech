import { Router } from "express";
import { getUsuarios, createUsuario, updateUsuario, deleteUsuario} from "../controllers/usuario.controller.js";
import { verifyAdmin } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validate.middlewares.js";
import { registerSchema} from "../Schemas/auth.schema.js";
import { AuthToken } from "../middlewares/validateToken.js";


const router = Router();
router.get('/User',verifyAdmin,getUsuarios);
router.post('/User',verifyAdmin,validateSchema(registerSchema), createUsuario);
router.put('/User/:id',verifyAdmin,validateSchema(registerSchema), updateUsuario);
router.delete('/User/:id',verifyAdmin, deleteUsuario);

//Rutas especiales



export default router;