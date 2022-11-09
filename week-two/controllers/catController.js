'use strict';
const catModel = require('../models/catModel');


const getCats = async (req, res) => {
    const cats = await catModel.getAllCats();
    res.json(cats)
}

const getCat = async (req, res) => {
    const cat = await catModel.getCatById(res, req.params.catId)
    console.log(req.params.catId)
    if (cat) {
        res.json(cat);

    } else {
        res.sendStatus(404);
    }
};

const modifyCat = async(req, res) => {
    const cat = req.body;
    if(req.params.catId){
        cat.id = req.params.catId;
    }
    
    const result = await catModel.updateCatById(cat.id,cat, res);
    if(result.affectedRows > 0){
        res.json({message:' cat modifyied' + cat.id});
       }else{
        res.json({message:' nothing has been changed'});
       }    

 }

const createCat = async (req, res) => {
    const cat = req.body;
    cat.filename = req.file.filename;
    console.log('Adding a new cat:', req.body);
    const catId= await catModel.addCat(req.body);
    res.status(201).json({catId});
  };
const deleteCat = async(req, res) => { 
   const result = await catModel.deleteCatById(req.params.catId, res)
   console.log('cat deleted', result)
   if(result.affectedRows > 0){
    res.json({message:' cat deleted'});
   }else{
    res.json({message:' cat already deleted'});
   }
   

}


module.exports = {
    getCat,
    getCats,
    modifyCat,
    createCat,
    deleteCat
};
