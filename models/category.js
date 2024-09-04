const mongoose=require('mongoose');
const CategorySchema=new mongoose.Schema({
    name:{type: String,required:true,unique:true},
    CreatedAt:{type:Date,default:Date.now}
});
module.exports=mongoose.model('category',CategorySchema);
