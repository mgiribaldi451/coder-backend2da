import express, { Express } from "express";
import indexCart from "./carrito";
import indexProd from "./productos";


const app: Express = express();
app.use("/productos",indexProd);
app.use("/carrito",indexCart);


export default app;