// const mongoose=require('mongoose')
// const colors=require('colors')
// const connectdb =async()=>{
//     try{
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log(`server running on ${mongoose.connection.host}`.bgCyan.white);
//     }
//     catch (error){
//         console.log('${error}'.bgRed);
//     }
// }
// module.exports=connectdb

const mongoose = require('mongoose');
const colors = require('colors');

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed); // Use backticks to interpolate the error variable
  }
};

module.exports = connectdb;
