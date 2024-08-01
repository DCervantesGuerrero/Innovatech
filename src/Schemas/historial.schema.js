import { z } from "zod";

const listaProductoSchema = z.object({
    historial_producto_id: z.string().uuid({ message: "Invalid product ID" }), // Asumiendo que es un ID en formato UUID
    historial_cantidad: z.number({ required_error: "Quantity is required" })
});

const historialproductoSchema = z.object({
    historial_fecha: z.date({ required_error: "Date is required" }),
    historial_usuarios_id: z.string().uuid({ message: "Invalid user ID" }), // Asumiendo que es un ID en formato UUID
    historial_producto_id: z.array(listaProductoSchema),
    historial_costo_total: z.number({ required_error: "Total cost is required" }),
    historial_descripcion: z.string().optional()
});

export default historialproductoSchema;
