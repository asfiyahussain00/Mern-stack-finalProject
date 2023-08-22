const app = require('express')
const router = app.Router()
const { getAllCategories, getCategoryByID, createCategory, updateCategory, deleteCategory } = require('./categorycontroller')

router.get('/getallCategories', getAllCategories)
router.get('/getCategorybyid', getCategoryByID)
router.post('/createCategory', createCategory)
router.put('/updateCategory', updateCategory)
router.delete('/deleteCategory', deleteCategory)



module.exports = router