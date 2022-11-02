
"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllCats = async (res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_cat");
    return rows;
  } catch (e) {
    console.error("error", e.message);
  
  }
};

const getCatById = async (res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT cat FROM wop_cat WHERE cat_id = ?", [catId]);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    
  }
};

module.exports = {
  getAllCats,
  getCatById
};