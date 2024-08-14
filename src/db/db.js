const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/av")
// mongodb+srv://user:pass@gettingstarted.x000y.mongodb.net/DbName?retryWrites=true&w=majority




.then(()=>{
    console.log(`connect`);
})
.catch((error)=>{
    console.log(error);
})



// mongodb://127.0.0.1:27017/empform