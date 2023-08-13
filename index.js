const express = require('express')
const app = express()
require('dotenv').config()
const CategoryRouter = require('./Api/Category/categoryRouter')
const ProductRouter = require("./Api/products/productRouter")
const BrandRouter = require ('./Api/Brands/brandRouter')
const UserRouter = require('./Api/User/userRouter')
const port = process.env.SERVER_PORT 

app.use(express.json())
app.use('/api', CategoryRouter)
app.use( '/api', ProductRouter)
app.use ('/api', BrandRouter)
app.use('/api',UserRouter )


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})