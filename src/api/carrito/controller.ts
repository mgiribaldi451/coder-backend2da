import { NextFunction, query, Request, Response } from "express";
//import services from "./services";
import Carro from "../../interfaces/carro";
import CartDaoMongo from '../../daos/carrito/daoMongo'

const daoProd = new CartDaoMongo()


async function getAllCart(req: Request,res: Response, next: NextFunction) {
  try {
    const data = await daoProd.getAllCart();
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function getCartId(req: Request,res: Response, next: NextFunction) {
  try {
    
    console.log(req.params.id)
    const data = await daoProd.getCartById(parseInt(req.params.id));
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function postCart(req: Request,res: Response, next: NextFunction) {
  try {
    const saveCart: Carro = req.body;
    console.log(saveCart)
    const data = await daoProd.saveCart(saveCart);
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}


async function putCart(req: Request,res: Response, next: NextFunction) {
  try {
    const saveCart: Carro = req.body;
    const data = await daoProd.updateCart(parseInt(req.params.id),saveCart );
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

async function deleteCart(req: Request,res: Response, next: NextFunction) {
  try {
    const data = await daoProd.deleteCart(parseInt(req.params.id));
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer productos: " + error));
  }
}

// async function addProdToCart(req: Request,res: Response, next: NextFunction) {

// }


export default { getAllCart , postCart, getCartId,putCart,deleteCart}
