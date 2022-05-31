import mongoose from "mongoose";

const productColecction = 'products'

const productSchema = new mongoose.Schema({
    id: {type:Number,required:true,max:100},
    description: {type:String,required:true,max:100},
    timestamp: {type:Number,required:true,max:100000000000000000000000},
    nombre: {type:String,required:true,max:100},
    codigo: {type:String,required:true,max:100},
    foto: {type:String,required:true,max:100},
    precio: {type:Number,required:true,max:100},
    stock: {type:Number,required:true,max:100}

})

const products = mongoose.model(productColecction,productSchema)

export default products