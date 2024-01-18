import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import userRoutes from './Routes/userRoutes.js'
import vendorRoutes from './Routes/vendorRoutes.js'
import categoryRoutes from './Routes/categoryRoutes.js'
import productRoutes from './Routes/productRoutes.js'
import orderRoutes from './Routes/orderRoutes.js'


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors())

//api
app.use('/api/users', userRoutes)
app.use('/api/vendors', vendorRoutes)
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);



app.get('/', (req, res) => {
    res.send('Shopkart is start...')
})

mongoose.connect(process.env.MONGO_DB).
    then(() => {
        console.log("DB connected succesfully");


        app.listen(process.env.PORT || 5000, (error) => {
            if (error) console.log(error);

            console.log("Server is running at", process.env.PORT)
        })
    }).catch((error) => {
        console.log('error', error)
    })