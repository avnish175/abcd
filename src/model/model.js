const mongoose=require('mongoose');

const empSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    }    
});
const empCollection=new mongoose.model('empcollection',empSchema);
// here we donot have to write in plural i.e empcollections 
module.exports=empCollection;