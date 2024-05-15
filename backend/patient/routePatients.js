/**
 *  @author Elia Renzoni
 *  @brief patients router
 */

const router = require('express').Router()

// definitions
router.post("/", patient.createNewCBTCard)
router.put("/", patient.modifyCBTCard)
router.delete("/", patient.deleteCBTCard)
router.get("/", patient.getAllCBTCards)
