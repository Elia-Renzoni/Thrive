/**
 *  @author Elia Renzoni
 *  @date 5/05/2024
 *  @brief Thrive application service
*/

const express = require('express')
const app = express()

const PatientRoutes = require("./patient/routePatients")
const TherapistRoutes = require("./therapist/routeTherapist")
const AuthRoutes = require("./auth/routeAuth")

const LISTEN_PORT = process.env.PORT || 4040

// json payloads
app.use(express.json())

app.use("/first", PatientRoutes)


const server = app.listen(LISTEN_PORT, function() {
    console.log('server listening...')
})
