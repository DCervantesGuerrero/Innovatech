import Historial_Compra from "../models/historialcompra.models.js"

export const getHistorial_Compra = async(req,res) =>{
    const HistorialesCompras = await Historial_Compra.find({});
    res.json(HistorialesCompras);
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

export const updateHistorial_Compra = async (req, res) => {
    try {
        const historial = await Historial_Compra.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!historial) return res.status(404).json({ message: "Purchase history not found" });
        return res.json(historial);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

