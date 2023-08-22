const express = require('express')
const router = express.Router()
const {createBrand , getAllBrands , getBrandByID , updateBrand , deleteBrand } = require('./brandcontroller')

router.post('/createBrand' , createBrand)
router.get('/getAllBrands' , getAllBrands)
router.get('/getBrandById' , getBrandByID)
router.put('/updateBrand' , updateBrand)
router.delete('/deleteBrand' , deleteBrand)

module.exports = router;