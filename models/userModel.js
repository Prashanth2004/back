const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:[true,'name is required']
    },
    email:{
        type:String,
        require:[true,'email should be unique'],
        unique:true
    },
    password:{
        type:String,
        require:[true,"password is required"]
    },
},
    {timeStamps:true,
    versionKey:'0',
    optimisticConcurrency:true}
)

const userModel=mongoose.model("users",userSchema);
module.exports=userModel;