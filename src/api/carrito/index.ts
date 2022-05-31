import express, { Router } from "express";
import controller from "./controller";
const router: Router = express.Router();
router.get("/", controller.getAllCart);
router.get("/:id", controller.getCartId);
//router.get("/:id/productos", controller.getProdsCartId);
router.post("/", controller.postCart);
//router.post("/:idCart/productos/:idProd", controller.addProdToCart);
//router.delete("/:idCart/productos/:idProd", controller.deleteProdCart);
router.delete("/:id", controller.deleteCart);
router.put("/:id", controller.putCart);


export default router;