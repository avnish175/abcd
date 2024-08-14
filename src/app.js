
const express=require('express');
const app=express();
let port=3000;
const path=require('path');

const empCollection=require('./model/model')
const template_path=path.join(__dirname,'../template/views');
app.set('view engine','hbs')
app.set('views',template_path);



// hamko db.js ko require karna padega ok
// So lets see how we are going to require
require('./db/db');
// app.get('/',(req,res)=>{
//     res.send("hello world")
// });


// app.get('/',(req,res)=>{
//     res.send('index')
// });
app.use(express.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    res.render('abc');
})

app.post('/empdata',async(req,res)=>{
    try {
        const password=req.body.password;
        const cpassword=req.body.cpassword;
    
        if(password===cpassword){
            // === ka matlab iski value and type dono check kia jayega ok
          const empData=new empCollection({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            cpassword:req.body.cpassword
          })
    
          const postData=await empData.save();
          res.send(postData);
        }else{
            res.send("PASSWORD ARE NOT MATCHING.....")
        }
    } catch (error) {
        res.send(error)
    }
    // console.log(req.body.name)
    // res.send(req.body.name);

})

app.listen(port,()=>{
    console.log(`listening to the port${port}`)
})