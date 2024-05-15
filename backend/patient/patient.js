/**
 *  @author Elia Renzoni
 *  @brief patient API functionality 
 * 
*/

const express = require('express')
const files = require('jsonfile')
const path = require('path')
const route = express.Router()

route.get("/", (req, res) => {
    res.send("OK")
})

route.post("/newcard", (req, res) => {
    let username = req.body.username
    let context = req.body.context
    let inside = req.body.inside
    let consequences = req.body.consequences
    let debate = req.body.debate
    let learned = req.body.learned

    let jsonEcondedInfo = jsonConverter({
        context: context, inside: inside,
        consequences: consequences, debate: debate,
        learned: learned
    })

    writeInDatabase(path.join(storage, username), jsonEcondedInfo, res)
    console.log(context, inside, consequences, debate, learned)
})

route.delete("/", (req, res) => {

})

route.get("/", (req, res) => {

})


function jsonConverter(toConvert) {
    return JSON.stringify(toConvert)
}

function writeInDatabase(path, content, res) {
   files.writeJson(path, content, (error) => {
        if (error) {
            res.status(400).json({message: error})
        } else {
            res.status(201).json({message: "new card added to the store"})
        }
   }) 
}

function databaseStat(username) {
    
}

function readFromDatabase(username) {

}

module.exports = route