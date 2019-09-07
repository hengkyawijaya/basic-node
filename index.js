const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const Sequelize = require('sequelize')

const app = express()

const config = require('./config')
const Router = require('./routers')

//Secure Express Apps
app.use(helmet())

//CORS Options
const corsOptions = {
    origin: true,
    credentials: true
};
  
app.use(cors(corsOptions));

//Parse the body request to json
app.use(bodyParser.json());

//HTTP request logger with Morgan
app.use(morgan('dev'));

//Router
Router(app);

//Default fallback
app.use(( error , req, res, next) => {
	return res.status(422).send({ status: {
        code: 422,
        message: error.message,
        succeeded: false
    }});
});

//Listen server to the specific PORT
app.listen(config.PORT, () => {
  console.log(`listen port ${config.PORT}`)
})