const transectionModel = require("../models/transectionModel");
const moment=require('moment');
const getAllTransection=async(req,res)=>{
    try{
    const {frequency}=req.body;
    console.log(req.body)
    const transections=await transectionModel.find({
        // ...(frequency!=='custom'?{
        date:{
            $gt: moment().subtract(Number(frequency), "d").toDate(),
        },
    // }:{
    //     date:{
    //         $gte: selectedDate[0],
    //         $lte: selectedDate[1],
    //     },

    // }),
        userid:req.body.userid,
    });
     res.status(201).json(transections);

    }
    catch(error){
        res.status(500).json( error);
        console.log(error)
    }
};
const editTransection=async(req,res)=>{
    try{
        await transectionModel.findOneAndUpdate({_id:req.body.transacationId},req.body.payload);
        console.log(req.body.transacationId)
    
    res.status(200).send("Edited Succsessfully")
    }
    catch (error){
        console.log(error);
        res.status(500).json(error);
    }
};
const deleteTransection=async(req,res)=>{
    try{
        await transectionModel.findOneAndDelete({_id:req.body.transacationId},req.body.payload);
        console.log(req.body.transacationId)
        res.status(200).send("Edited Succsessfully")
    }
    catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}
 const addTransection=async(req,res)=>{
    try{
        console.log(req.body)
        const newTransection=new transectionModel(req.body);
        await newTransection.save()
        res.status(201).send("Transaction Created")
    }
    catch(error){
        res.status(500).json( error);
        console.log(error)
    }
 };

 module.exports={getAllTransection,addTransection,editTransection,deleteTransection};