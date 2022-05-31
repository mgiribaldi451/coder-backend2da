import express, { Router } from "express";
import controller from "./controller";
const router: Router = express.Router();
router.get("/", controller.getProducts);
router.post("/", controller.postProducts);
router.get("/:id", controller.getProductId);
router.delete("/:id", controller.deleteProducts);
router.put("/:id", controller.putProducts);

export default router;
