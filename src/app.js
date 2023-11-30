const express=require('express');
const app=express();
const path=require('path');
require("../src/db/conn");
const port=process.env.PORT ||3000;
var staticpath = path.join(__dirname, '/');

app.listen(port,()=>{
    console.log(`connection at port ${port}`);
})


    



