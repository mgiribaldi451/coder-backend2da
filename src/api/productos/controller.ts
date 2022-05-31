import { NextFunction, query, Request, Response } from "express";
import Productos from "../../interfaces/productos";
import ProductsDaoMongo from '../../daos/productos/daoMongo'

const daoProd = new ProductsDaoMongo()


async function getProducts(req: Request,res: Response, next: NextFunction) {
  try {
    const data = await daoProd.getAll();
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function getProductId(req: Request,res: Response, next: NextFunction) {
  try {
    
    console.log(req.params.id)
    const data = await daoProd.getProdById(parseInt(req.params.id));
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function postProducts(req: Request,res: Response, next: NextFunction) {
  try {
    const saveProduct: Productos = req.body;
    console.log(saveProduct);
    
    const data = await daoProd.save(saveProduct);
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}


async function putProducts(req: Request,res: Response, next: NextFunction) {
  try {
    const saveProduct: Productos = req.body;
    const data = await daoProd.updateProd(parseInt(req.params.id),saveProduct );
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function deleteProducts(req: Request,res: Response, next: NextFunction) {
  try {
    const data = await daoProd.deleteProducts(parseInt(req.params.id));
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}


export default { getProducts , postProducts, getProductId,putProducts,deleteProducts}