import mongoose from "mongoose";
import ContainerMongo from '../../api/carrito/services'
import cart from '../../api/models/cart'

class CartDaoMongo extends ContainerMongo {
    constructor(){
        super(cart);
    }
}

export default CartDaoMongo 