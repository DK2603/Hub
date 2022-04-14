const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
//Route files
const skus =require('./routes/skus');
const user =require('./routes/user');

//Load env vars
dotenv.config({path:'./config/config.env'});

//Connect to database
connectDB();


const app=express();

//Body parser
app.use(express.json());
// Enable CORS
app.use(cors());
//Mount routers
app.use('/api/v1/skus', skus);
app.use('/api/v1/user', user)

const PORT=process.env.PORT || 5000;
const server =  app.listen(PORT,console.log('Server running in', process.env.NODE_ENV,'mode on port', PORT));


//Handle unhandled promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);
    //close server & exit process
    server.close(()=>process.exit(1));
});