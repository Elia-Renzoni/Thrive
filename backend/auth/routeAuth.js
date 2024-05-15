/**
 *  @author Elia Renzoni
 *  @brief auth router
 */

const router = require('express').Router()

// definitions
router.post("/", auth.signUp)
router.delete("/", auth.signOut)
router.get("/", auth.signIn)