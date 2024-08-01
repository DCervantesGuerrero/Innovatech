import { Router } from "express";
import { validateSchema } from "../middlewares/validate.middlewares.js";
import { verifyAdmin } from "../middlewares/validateToken.js";
import { productoSchema } from "../Schemas/producto.schema.js";
import { getProductos, createProductos, updateProducto, deleteProducto } from "../controllers/productos.controller.js";

const router = Router();

router.get('/Producto',getProductos);
router.post('/Producto',verifyAdmin,validateSchema(productoSchema), createProductos);
router.put('/Producto/:id',verifyAdmin,validateSchema(productoSchema), updateProducto);
router.delete('/Producto/:id',verifyAdmin, deleteProducto);

export default router;