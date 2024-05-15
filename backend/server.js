/**
 *  @author Elia Renzoni
 *  @date 5/05/2024
 *  @brief Thrive application service
*/

const express = require('express')
const app = express()
const LISTEN_PORT = process.env.PORT || 4040

// json payloads
app.use(express.json())



const server = app.listen(LISTEN_PORT, function() {
    console.log('server listening...')
})
