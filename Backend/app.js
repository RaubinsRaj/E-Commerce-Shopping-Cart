const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();
// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const braintreeRoutes = require('./routes/braintree');
const orderRoutes = require('./routes/order');

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
  
  apis: ['./routes/*.js'],
  
  swaggerDefinition: {
           info:{
                 title: 'Eshop Swagger Documentation',
                 description: 'A api documentation page',
                 contact: {
                     name: 'Raubins Raj - Student'
                 },
                 servers: ["http://localhost:8000"]
             }
         },
};
const specs = swaggerJsdoc(options);


// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB Connected'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', braintreeRoutes);
app.use('/api', orderRoutes);

app.use(cors());

const port = process.env.PORT || 8000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



