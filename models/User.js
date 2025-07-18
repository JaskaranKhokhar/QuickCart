import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    _id : { type: String, required:true},
    name: { type: String, required:true},
    email : { type: String, required:true, unique: true},
    imageURL: { type: String, required:true},
    cartItems : { type: object, default:{}}
    }, {minimize : false })

    const  User =  mongoose.models.user || mongoose.model('user', userSchema)

    export default User