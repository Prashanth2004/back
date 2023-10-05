const mongoose=require('mongoose')

const transectionSchema=mongoose.Schema({
    userid:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:[true,'amount is required']
    },
    type:{
        type:String,
        require:[true,'type is required']
    },
    category:{
        type:String,
        require:[true,'category  is required'],
    },
    refernce:{
        type:String,
        require:[true,'refernce  is required'],
    },
    description:{
        type:String,
        require:[true,'desc  is required'],
    },
    date:{
        type:Date,
        require:[true,'date  is required'],
    },
    
    
},
    {timeStamps:true,
    versionKey:'0',
    optimisticConcurrency:true}
)

const transectionModel=mongoose.model("transections",transectionSchema);
module.exports=transectionModel;