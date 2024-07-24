import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

//Import of every route
import usuarioRoutes from "./routes/usuario.routes.js"

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api",usuarioRoutes);

export default app;