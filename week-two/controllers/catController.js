'use strict';
const catModel = require('../models/catModel');

const getCats = async(req, res) => {
    const cats = await catModel.getAllCats();
    res.json(cats)
}

const getCat = async (req,res) =>{
    const cat = catModel.getCatById(req.params.catId)
    if(cat){
        res.json(cat);

    }else{
        res.sendStatus(404);
    }
};
  
const modifyCat = (req,res) => {}
const createCat = (req,res) => {
    console.log(req.body);
    res.send('adding cat')
};
const deleteCat = (req,res) => {}

module.exports = {
    getCat,
    getCats,
    modifyCat,
    createCat,
    deleteCat
};
