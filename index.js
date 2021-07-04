const express = require('express');
const app = express();
const port = 5000;
const { User } = require('./models/User');

const config = require('./config/key');

//application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));
//application/json
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false,
}).then(()=>{
    console.log('MongoDB Connected..')
}).catch(err=>console.log(err));



app.get('/', (req, res)=>res.send('Hello world!!!'));
app.post('/register',(req,res)=>{
    //회원 가입시 필요한 정보를 가져오면

    const user = new User(req.body);
    //데이터베이스에 입력
    user.save((err, userInfo)=>{
        if(err) return res.json({success:false,err});
        return res.status(200).json({
            success:true 
        })
    })
})

app.listen(port,()=>console.log(`Example app listening on port ${port}`));