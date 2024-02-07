const express = require("express")
const groceryRouter = express.Router()
const {GroceryModel} = require("../models/groceryModel")
groceryRouter.get("/",async(req,res)=>{
    try {
        const grocery = await GroceryModel.find()
        console.log(grocery)
        res.status(200).send(grocery)
    } catch (error) {
        res.status(400).send({msg:error.message})

    }
})
module.exports = {groceryRouter}