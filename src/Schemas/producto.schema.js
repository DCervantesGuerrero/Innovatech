import { z } from "zod";

export const productoSchema = z.object({
    producto_nombre: z.string({ required_error: "Product name is required" }).trim(),
    producto_tipo: z.string({ required_error: "Product type is required" }).trim(),
    producto_descripcion: z.string().trim().optional(),
    producto_precio: z.number({ required_error: "Product price is required" }),
    producto_disponibilidad: z.number({ required_error: "Product availability is required" }),
    producto_proveedor: z.string({ required_error: "Product supplier is required" }).trim(),
    producto_imagen: z.array(z.string()).optional()
});
