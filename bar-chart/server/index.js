import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { error } from "console";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(()=> {
        console.log("Database connected successfully");
        app.listen(8000, ()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

const HousePriceSchema = new mongoose.Schema({
    number_of_bedrooms : Number,
    Price : Number,
});

const HousePriceModel = mongoose.model('house_price', HousePriceSchema);

app.get("/get_housePrice", async(req,res)=>{
    const houseData = await HousePriceModel.find();
    res.json(houseData);
})