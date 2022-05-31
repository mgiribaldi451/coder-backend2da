import mongoose from "mongoose";



const cartColecction = 'cart'

const cartSchema = new mongoose.Schema({
    id:{type:Number , required:true,max:100},
    timestampCart: {type:Number , required:true,max:100000000000000000},
    productos:[{
        id: {type:Number,required:false,max:100},
        description: {type:String,required:false,max:100},
        timestamp: {type:Number,required:false,max:100000000000000000},
        nombre: {type:String,required:false,max:100},
        codigo: {type:String,required:false,max:100},
        foto: {type:String,required:false,max:100},
        precio: {type:Number,required:false,max:100},
        stock: {type:Number,required:false,max:100}
    }
    ]

})

const cart = mongoose.model(cartColecction,cartSchema)

export default cart