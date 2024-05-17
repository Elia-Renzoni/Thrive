/**
 *  @author Elia Renzoni
 *  @brief patient API functionality 
 * 
*/

const express = require('express')
const files = require('jsonfile')
const path = require('path')
const fs = require('fs')
const process = require('process')
const route = express.Router() 

route.get("/", (req, res) => { res.send("OK") })

route.post("/newcard", (req, res) => {
    let username = req.body.username
    let context = req.body.context
    let inside = req.body.inside
    let consequences = req.body.consequences
    let debate = req.body.debate
    let learned = req.body.learned

    let completePath = path.join("E:", "progetto_piattaforme", "Thrive","storage", username + '.json')

    let jsonEcondedInfo = jsonConverter({
        context: context, inside: inside,
        consequences: consequences, debate: debate,
        learned: learned
    })

    changeWorkDirectory(path.join("E:", "progetto_piattaforme","Thrive", "storage"))
    writeInDatabase(completePath, jsonEcondedInfo, res)
    
})

route.delete("/", (req, res) => {

})

route.get("/", (req, res) => {

})


function jsonConverter(toConvert) {
    return JSON.stringify(toConvert)
}

function writeInDatabase(path, content, res) {
    console.log(path)
   files.writeFile(path, content, (error) => {
        if (error) {
            res.status(400).json({message: error})
        } else {
            res.status(201).json({message: "new card added to the store"})
        }
   }) 
}

function databaseStat(path) {
    fs.access(path, fs.constants.F_OK, (error) => {
        if (error) {
            return false
        } else {
            return true
        }
    }) 
}

function changeWorkDirectory(path) {
    console.log(path)
    process.chdir(path)
}

function readFromDatabase(username) {

}

module.exports = route