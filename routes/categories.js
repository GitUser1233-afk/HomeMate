//module.exports=Router;
const express=require('express');
const router=express.Router();
const Category =require('../models/category');


//categorry api building

router.post('/',async(req,res)=>{
    const {name}=req.body;
    try{
        const category=new Category({name});
        await category.save();
        res.status(201).json({message:"Category created!!!!!!!!!"});
 
    }catch(err){
        if(err.code===11000){
            return res.status(400).json({message:"Category already exists"})
        }
        res.status(500).json({message:"server error", error:err.message})
    }
})
router.get('/getall',async(req,res)=>{
    try{
        const categories=await Category.find();
        res.status(200).json(categories);


    }catch(err){
        res.status(500).json({message:"server error", error:err.message})
    }
});


module.exports=router;
