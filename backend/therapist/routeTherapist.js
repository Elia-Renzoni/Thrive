/**
 *  @author Elia Renzoni
 *  @brief therapist router
*/

const router = require('express').Router()
const therapist = require('./therapist')

// definitions
router.put("/", therapist.modifyPatientCBTCard)
router.get("/", therapist.searchPatientCBTCards)
router.post("/", therapist.addNewPatient)