import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tours.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// database connection
const connect = async()=> {
    try{
        await mongoose.connect(process.env.MONGO_URI ,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB database Connected");
    }catch(err){
        console.log("Connection to mongoDB failed!");
        console.log(err);
    }
}


// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/tours', tourRoute)


app.listen(port,()=>{
    connect();
    console.log('Server listening on port',port);
});