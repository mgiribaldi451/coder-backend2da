import mongoose from "mongoose";
import Productos from "../../interfaces/productos";
import prodModel from '../models/products'
//import admin from "firebase-admin"

const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.ky0aqm9.mongodb.net/ecommerce?retryWrites=true&w=majority'


class ContainerMongo {
  constructor(model: any) {
    mongoose.connect(MONGO_URI, {

    }, () => console.log('Connected'))

    this.model = model;
  }

  async getAll() {
    return await this.model.find()
  }

  async getProdById(ids: number) {
    return await this.model.find({ id: ids })
  }

  async save(document: Productos) {

    let prod = prodModel
    let saveProd = new prod(document)
    saveProd.save()

  }

  async updateProd(ids: number, update) {
    const filter = { id: ids };
    const updates = update ;
    let doc = await this.model.findOneAndUpdate(filter, updates, {
      new: true
    });
  }

  async deleteProducts(ids: number) {

   await this.model.deleteOne({id:ids})

  }

}

// const serviceAccount = require('./backend-coder-9bf30-firebase-adminsdk-2y1xx-aa14b45796.json')
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// const db = admin.firestore()

// class ContainerFirestone {
//   constructor(collection){
//     this.collection = db.collection(collection)
//     console.log(`Base conectada con la collection ${collection}`)
//   }
//   async save(document, id){
//     let doc = this.collection.doc(`${id}`)
//     let item = await doc.create(document)
//     return item
//   }

//   async getAll(){
//     let result = await this.collection.get()
//     result = result.docs.map(doc => ({ 
//       id: doc.id,
//       data: doc.data()
//     }))
//     return result
//   }

// }

export default ContainerMongo ;// ContainerFirestone;