/**
 *  @author Elia Renzoni
 *  @date 5/05/2024
 *  @brief Thrive application service
*/

const express = require('express')
const app = express()

const PatientRoutes = require("./patient/patient")
const TherapistRoutes = require("./therapist/therapist")
const AuthRoutes = require("./auth/auth")

const LISTEN_PORT = process.env.PORT || 4040

// json payloads
app.use(express.json())

app.use("/patient", PatientRoutes)
app.use("/therapist", TherapistRoutes)
app.use("/auth", AuthRoutes)


const server = app.listen(LISTEN_PORT, function() {
    console.log('server listening...')
})
