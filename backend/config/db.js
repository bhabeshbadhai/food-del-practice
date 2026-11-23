import mongoose from "mongoose"

export const connectDB= async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/food')
        console.log("DB connected")
    } catch (error) {
        console.log("DB connection failed")
        console.log(`error:${error}`)
    }
}