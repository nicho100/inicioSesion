import mongoose from "mongoose";

let isConnected;
const connectToDb=async()=>{
    if(!isConnected){
        console.log("se conecto")
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
        isConnected=true
        return
    }
    console.log("esta conectado")
    return
}

export {connectToDb}