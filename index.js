const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dahun:zxcv1234@boilerplate.ydvoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false,
}).then(()=>{
    console.log('MongoDB Connected..')
}).catch(err=>console.log(err));

//mongodb+srv://dahun:<password>@boilerplate.ydvoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.get('/', (req, res)=>res.send('Hello world'));
app.listen(port,()=>console.log(`Example app listening on port ${port}`));