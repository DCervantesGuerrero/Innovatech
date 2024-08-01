import { z } from "zod";

export const registerSchema = z.object({

    usuario_nombre: z.string({ required_error: "Name is required" }),
    usuario_correo: z.string({ required_error: "Email is required" }).email({ message: "Email is not valid" }),
    usuario_contrasena: z.string({ required_error: "Password is required" }).min(6, { message: "Password must be at least 6 characters" }),
    usuario_apellido: z.string({ required_error: "Last name is required" }),
    usuario_apellido_2: z.string().optional(),
    usuario_fecnac: z.string({ required_error: "Date of birth is required" }), // This should be a date string
    usuario_telefono: z.array(z.string()).optional(),
    usuario_direccion: z.array(
        z.object({
            direccion: z.string({ required_error: "Address is required" }),
            provincia: z.string({ required_error: "Province is required" }),
            canton: z.string({ required_error: "Canton is required" }),
            distrito: z.string({ required_error: "District is required" }),
            codigo_postal: z.string({ required_error: "Postal code is required" }),
            num_casa_puerta: z.string({ required_error: "House/door number is required" }),
            numTelefono: z.string({ required_error: "Phone number is required" })
        })
    ).optional(),
    usuario_mapago: z.array(
        z.object({
            tipo_tarjeta: z.string({ required_error: "Card type is required" }),
            nombre_tarjeta: z.string({ required_error: "Cardholder name is required" }),
            numero_tarjeta: z.number({ required_error: "Card number is required" }),
            fecha: z.date({ required_error: "Expiry date is required" }),
            cvc: z.number({ required_error: "CVC is required" })
        })
    ).optional(),
    usuario_role: z.number().optional().default(1)
});

export const loginSchema = z.object(
    {
        usuario_correo: z.string().email(),
        usuario_contrasena: z.string().min(6)
    }
);