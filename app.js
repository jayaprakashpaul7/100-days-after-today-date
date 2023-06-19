const express=require('express');
const addDays=require('date-fns/addDays');

const app=express();
const date=addDays(new Date(),100);


app.get('/',(req,res)=>{
   
    res.send(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
})
module.exports=app;

