const express = require('express');
const router = express.Router();
const Skus = require('../models/Skus.js');
const app=express();

//@desc     Get all Skus
//@route    GET /api/v1/hospitals
//@access   public
exports.getSkus= async (req,res,next)=>{
   // res.status(200).json({sucess:true, msg:'Show all skus'});
   try{ 
    const skus = await Skus.find();
    res.status(200).json({sucess:true, count: skus.length, data:skus});
} catch(err){
   console.log(err.message); 
   res.status(400).json({sucess:false});
}
};

//@desc     Get single sku
//@route    GET /api/v1/skus/:id
//@access   public
 exports.getSku = async (req,res,next) =>{
     try{
        const skus = await Skus.findById(req.params.id);

        if(!skus){
     
             return res.status(400).json({success: false});
         } 
     
       res.status(200).json({success: true, data: skus});
    } catch(err){
       console.log(err.message); 
       res.status(400).json({success:false});
   }
 };

//@desc     Create a sku
//@route    POST /api/v1/skus
//@access   Private
exports.createSku = async (req,res,next)=>{
    console.log(req.body);
    const skus = await Skus.create(req.body);
    res.status(201).json({success:true, data: skus});
};

//@desc     Update single sku
//@route    PUT /api/v1/skus/:id
//@access   Private
exports.updateSku= async (req,res,next)=>{
    console.log(req.body);
    try{
        const skus = await Skus.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators:true
    });
        if(!skus){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true,data:skus});
    }
    catch(err){
        res.status(400).json({success:false});
    }
};

//@desc     Delete single sku
//@route    DELETE /api/v1/skus/:id
//@access   Private
exports.deleteSku= async (req,res,next)=>{
    console.log(req.body);
    try{
        const skus = await Skus.findById(req.params.id);
        if(!skus){
            return res.status(400).json({success:false});
        }
        Skus.remove();
        res.status(200).json({success:true,data:{}});
    }
    catch(err){
        res.status(400).json({success:false});
    }
};

module.exports=exports;