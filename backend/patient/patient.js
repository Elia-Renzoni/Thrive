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

route.get("/:user", (req, res) => {
    let userToSearch = req.params.user
    var response = {
        card: []
    }

    changeWorkDirectory(path.join("E:", "progetto_piattaforme", "Thrive", "storage"))
    let completePath = path.join("E:", "progetto_piattaforme", "Thrive", "storage", userToSearch + '.json')

    if (readFromDatabase(completePath, response)) {
        res.status(200)
        res.send(response.card.pop)
    } else {
        res.status(400)
    }
})

route.post("/newcard", (req, res) => {
    let username = req.body.username
    var requestSet = {
        card: []
    } 
    requestSet.card.push({
        context: req.body.context,
        inside: req.body.inside,
        consequences: req.body.consequences,
        debate: req.body.debate,
        learned: req.body.learned
    })

    let completePath = path.join("E:", "progetto_piattaforme", "Thrive","storage", username + '.json')

    let jsonEcondedInfo = jsonConverter(requestSet)

    changeWorkDirectory(path.join("E:", "progetto_piattaforme","Thrive", "storage"))
    writeInDatabase(completePath, jsonEcondedInfo, res)
    
})

route.delete("/", (req, res) => {

})

route.patch("/", (req, res) => {

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

function readFromDatabase(path, response) {
    files.readFile(path, (error, data) => {
        if (error) {
            return false
        }
        response.card.push(data)
        return true
    })
}

module.exports = route