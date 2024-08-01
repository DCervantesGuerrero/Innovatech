import mongoose from 'mongoose';

const listaProductoSchema = new mongoose.Schema({
    historial_producto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'historial_producto'
    },
    historial_cantidad: {
        type: Number,
        require: true
    },

});

const historialproductoSchema = new mongoose.Schema(
    {
        historial_fecha: {
            type: Date,
            require: true,
        },
        historial_usuarios_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'usuario_id'
        },
        historial_producto_id: {
            type: [listaProductoSchema],
            require: true
        },
        historial_costo_total: {
            type: Number,
            require: true
        },
        historial_descripcion: {
            type: String,
            require: false
        }


    }, {
    timestamps: true
}

);

export default mongoose.model('Historial_Compra', historialproductoSchema)