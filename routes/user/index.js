const express= require ("express")
const router = express.Router()
const User = require ("../../models/User")
const Pharmacy = require ("../../models/Pharmacy")
router.post("/register",require("./register"))
router.post ("/login",require("./login"))
router.post("/addPharmecy",require("./addPharmacy"))
router.get ("/listPharmacy",require("./listPharmacy"))



module.exports = router