const express = require("express")
const electronicRouter = express.Router()
const {ElectronicModel} = require("../models/electronicsModel")

electronicRouter.get("/",async(req,res)=>{
    try {
        const electronic = await ElectronicModel.find()
        console.log(electronic)
        res.status(200).send(electronic)
    } catch (error) {
        res.status(400).send({msg:error.message})

    }
})
module.exports = {electronicRouter}