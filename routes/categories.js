//module.exports=Router;
const express=require('express');
const router=express.Router();
const Category =require('../models/category');


//categorry api building

router.post('/', async (req, res) => {
    let { name } = req.body;
    name=name.toLowerCase();
    name=name.trim();
    name = name.replace(/\s+/g, ' ');

    const isValidName = /^[a-zA-Z0-9 ]+$/.test(name);

    if (!isValidName) {
        return res.status(400).json({ message: 'Invalid category name! Only alphanumeric characters are allowed, without spaces or special symbols.' });
    }

    try {
        const category = new Category({ name });
        await category.save();
        res.status(201).json({ message: "Category created successfully!" });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: "Category already exists" });
        }
        res.status(500).json({ message: "Server error", error: err.message });
    }
});
router.get('/getall',async(req,res)=>{
    try{
        const categories=await Category.find();
        res.status(200).json(categories);


    }catch(err){
        res.status(500).json({message:"server error", error:err.message})
    }
});
router.delete('/delete',async(req,res)=>{
    try{
        const result=await Category.deleteMany({});
        res.status(200).json(result);


    }catch(err){
        res.status(500).json({message:"server error", error:err.message})
    }
});
router.get('/getOne/:id',async(req,res)=>{
    const {id}=req.params;
    try{
        const getting=await Category.findById(id);
        if(!getting){
            return res.status(404).json({message:"Category not found!!"});
        }
        res.status(200).json(getting);

    }catch(err){
        res.status(500).json({message:"server error", error:err.message})
    }
});

module.exports=router;
