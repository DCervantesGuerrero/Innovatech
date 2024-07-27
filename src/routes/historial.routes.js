import { Router } from "express";

import { getHistorial_Compra} from "../controllers/historial.controller.js";

const router = Router();

router.get('/Historial_Compra', getHistorial_Compra);
//router.post('/Producto', createProductos);
//router.put('/Producto/:id', updateProducto);
//router.delete('/Producto/:id', deleteProducto);



export default router;