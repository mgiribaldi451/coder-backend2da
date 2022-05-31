//import Productos from "../../interfaces/productos";
import Carro from "../../interfaces/carro";
import axios from "axios"
import mongoose from "mongoose";
import Productos from "../../interfaces/carro";
import cart from '../models/cart'
// import productos from '../models/products'


const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.ky0aqm9.mongodb.net/ecommerce?retryWrites=true&w=majority'


class ContainerCartMongo {
  constructor(model: any) {
    mongoose.connect(MONGO_URI, {

    }, () => console.log('Connected'))

    this.model = model;
  }

  async getAllCart() {
    return await this.model.find()
  }

  async getCartById(ids: number) {
    return await this.model.find({ id: ids })
  }

  async saveCart(document: Carro) {

    let carro = cart
    let saveCart = new carro(document)
    saveCart.save()

  }

  async updateCart(ids: number, update) {
    const filter = { id: ids };
    const updates = update ;
    let doc = await this.model.findOneAndUpdate(filter, updates, {
      new: true
    });
  }

  async deleteCart(ids: number) {

   await this.model.deleteOne({id:ids})

  }


}

export default ContainerCartMongo;



