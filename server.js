const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
//Route files
const skus =require('./routes/skus');

//Load env vars
dotenv.config({path:'./config/config.env'});

//Connect to database
connectDB();


const app=express();

//Mount routers
app.use('/api/v1/skus', skus);

const PORT=process.env.PORT || 5000;
const server =  app.listen(PORT,console.log('Server running in', process.env.NODE_ENV,'mode on port', PORT));

//Body parser
app.use(express.json());

//Handle unhandled promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);
    //close server & exit process
    server.close(()=>process.exit(1));
});