import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

//Import of every route
import usuarioRoutes from "./routes/usuario.routes.js"
import productoRoutes from "./routes/productos.routes.js"
import authRoutes from "./routes/auth.routes.js"
import historial_compraRoutes from "./routes/historial.routes.js"

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api",authRoutes)
app.use("/api",usuarioRoutes);
app.use("/api",productoRoutes);
app.use("/api",);



export default app;