import Historial_Compra from "../models/historialcompra.models.js"

export const getHistorial_Compra = async(req,res) =>{
    const Historial_Compra = await Historial_Compra.find({});
    res.json(Historial_Compra);
};

export const createHistorial_Compra = async (req, res) => {
    try {
        const { historial_fecha, historial_usuarios_id, historial_producto_id, historial_costo_total, historial_descripcion,  } = req.body;

        const newHistorial_Compra = new Historial_Compra({
            historial_fecha, historial_usuarios_id, historial_producto_id, historial_costo_total, historial_descripcion 
        });
        const savedHistorial_Compra = await newHistorial_Compra.save();
        res.json(savedHistorial_Compra);
    } catch (error) {
        console.error(error);
        res.json(error);
    }

};

/*export const updateProducto = async (req, res) => {
    try {
        const productos = await producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productos) return res.status(404).json({ message: "Product not found" });
        return res.json(productos);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};*/

