import { Router } from "express";
import { validateSchema } from "../middlewares/validate.middlewares.js";
import { verifyAdmin } from "../middlewares/validateToken.js";


import { getHistorial_Compra, createHistorial_Compra, updateHistorial_Compra} from "../controllers/historial.controller.js";

const router = Router();

router.get('/Historial_Compra', getHistorial_Compra);
router.post('/Historial_Compra', createHistorial_Compra);
router.put('/Historial_Compra/:id',verifyAdmin, updateHistorial_Compra);
//router.delete('/Producto/:id', deleteProducto);



export default router;