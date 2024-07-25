import { Router } from "express";

import { getProductos, createProductos, updateProducto, deleteProducto } from "../controllers/productos.controller.js";

const router = Router();

router.get('/Producto', getProductos);
router.post('/Producto', createProductos);
router.put('/Producto/:id', updateProducto);
router.delete('/Producto/:id', deleteProducto);



export default router;