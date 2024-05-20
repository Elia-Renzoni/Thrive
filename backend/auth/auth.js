/**
 *  @author Elia Renzoni
 *  @brief auth API functionality
 */

const express = require('express')
const route = express.Router()

route.get("/", (req, res) => {
    res.send("ASSALEM AILEKUM")
})

route.post("/", (req, res) => {

})

route.delete("/", (req, res) => {

})

route.get("/", (req, res) => {
    
})

module.exports = route

