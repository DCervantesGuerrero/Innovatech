import { Router } from "express"; 
import { login, register, logout, profile } from "../controllers/auth.controller.js";
import { AuthToken } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validate.middlewares.js";
import { registerSchema, loginSchema } from "../Schemas/auth.schema.js";


const router = Router();

router.post('/register',validateSchema(registerSchema),register);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout',logout);
router.get('/profile',AuthToken, profile);


export default router;