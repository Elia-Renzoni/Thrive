/**
 *  @author Elia Renzoni
 *  @brief patient API functionality 
 * 
*/

const express = require('express')
const route = express.Router()

route.get("/", (req, res) => {
    res.send("OK")
})

route.post("/", (req, res) => {

})

route.delete("/", (req, res) => {

})

route.get("/", (req, res) => {

})

module.exports = route