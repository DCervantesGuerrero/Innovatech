import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    
    producto_nombre: {
        type: String,
        required: true,
        trim: true
    },
    producto_tipo: {
        type: String,
        required: true,
        trim: true
    },
    producto_descripcion: {
        type: String,
        required: false,
        trim: true
    },
    producto_precio: {
        type: Number,
        required: true
    },
    producto_disponibilidad: {
        type: Number,
        required: true
    },
    producto_proveedor: {
        type: String,
        required: true,
        trim: true
    },
    producto_imagen: {
        type: [String],
        required: false
    }
}, {
    timestamps: true
}

);

export default mongoose.model('Producto', productoSchema);
