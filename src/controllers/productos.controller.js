import producto from "../models/productos.models.js"

export const getProductos = async(req,res) =>{
    const productos = await producto.find({});
    res.json(productos);
};

export const createProductos = async (req, res) => {
    try {
        const { producto_nombre, producto_tipo, producto_descripcion, producto_precio, producto_disponibilidad, producto_proveedor, producto_imagen } = req.body;

        const newProducto = new producto({
            producto_nombre, producto_tipo, producto_descripcion, producto_precio, producto_disponibilidad, producto_proveedor, producto_imagen
        });
        const savedProducto = await newProducto.save();
        res.json(savedProducto);
    } catch (error) {
        console.error(error);
        res.json(error);
    }

};

export const updateProducto = async (req, res) => {
    try {
        const productos = await producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productos) return res.status(404).json({ message: "Product not found" });
        return res.json(productos);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};

export const deleteProducto = async (req, res) => {
    try {
        const productos = await producto.findByIdAndDelete(req.params.id);
        if (!productos) return res.status(404).json({ message: "Product not found!" });
 
        return res.sendStatus(204);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
 
};

export const addPicture = async (req, res) => {};
