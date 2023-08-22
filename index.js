const express = require('express');
const app = express();
require('dotenv').config();
const CategoryRouter = require('./Api/Category/categoryRouter');
const ProductRouter = require("./Api/products/productRouter");
const BrandRouter = require ('./Api/Brands/brandRouter');
const UserRouter = require('./Api/User/userRouter');
const path = require('path')


const port = process.env.SERVER_PORT;

const clientpath = path.join(__dirname,'./client/dist')
app.use('/' , express.static(clientpath))

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5174',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
};

app.use(cors(corsOptions));


app.use(express.json());

app.use('/api', CategoryRouter);
app.use('/api', ProductRouter);
app.use('/api', BrandRouter);
app.use('/api', UserRouter);


app.get('*' ,(req,res)=>{
  res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port} `);
});
