import mongoose from 'mongoose';

const direccionSchema = new mongoose.Schema({
    direccion: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    canton: {
        type: String,
        required: true
    },
    distrito: {
        type: String,
        required: true
    },
    codigo_postal: {
        type: String,
        required: true
    },
    num_casa_puerta: {
        type: String,
        required: true
    },
    numTelefono: {
        type: String,
        required: true
    }
});

const mapagoSchema = new mongoose.Schema({
    tipo_tarjeta: {
        type: String,
        required: true
    },
    nombre_tarjeta: {
        type: String,
        required: true
    },
    numero_tarjeta: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    cvc: {
        type: Number,
        required: true
    }
});

const usuarioSchema = new mongoose.Schema({

    usuario_correo: {
        type: String,
        required: true,
        trim: true
    },
    usuario_contrasena: {
        type: String,
        required: true,
        trim: true
    },
    usuario_nombre: {
        type: String,
        required: true,
        trim: true
    },
    usuario_apellido: {
        type: String,
        required: true,
        trim: true
    },
    usuario_apellido_2: {
        type: String,
        required: false,
        trim: true
    },
    usuario_fecnac: {
        type: Date,
        required: true
    },
    usuario_telefono: {
        type: [String],
        required: false
    },
    usuario_direccion: {
        type: [direccionSchema],
        required: false
    },
    usuario_mapago: {
        type: [mapagoSchema],
        required: false
    },
    usuario_role: {
        type: Number,
        require: true,
        enum: [0, 1],
        default: 1
    }
}, {
    timestamps: true
}

);

export default mongoose.model('Usuario', usuarioSchema);
