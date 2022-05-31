import mongoose from "mongoose";
import ContainerMongo from '../../api/productos/services'
import productos from '../../api/models/products'

class ProductsDaoMongo extends ContainerMongo {
    constructor(){
        super(productos);
    }
}

export default ProductsDaoMongo 