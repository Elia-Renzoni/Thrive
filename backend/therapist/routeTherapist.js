/**
 *  @author Elia Renzoni
 *  @brief therapist router
*/

const router = require('express').Router()

// definitions
router.put("/", therapist.modifyPatientCBTCard)
router.get("/", therapist.searchPatientCBTCards)
router.post("/", therapist.addNewPatient)