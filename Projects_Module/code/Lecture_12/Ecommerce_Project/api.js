
const express = require("express");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require('express-mongo-sanitize');
const helmet=require("helmet");
// including env variables
dotenv.config();
const { PORT, DB_PASSWORD, DB_USER } = process.env;
/**********************connection to our DB********************************/
require("./utility/connectWithDB");
// with this your creating simple app -> api
const app = express();
const UserRouter = require("./router/UserRouter");
const ProductRouter = require("./router/ProductRouter");
const AuthRouter = require("./router/AuthRouter");
const BookingRouter = require("./router/BookingRouter");
const ReviewRouter = require("./router/ReviewRouter");

const corsConfig = {
    origin: true,
    credentials: true,
};
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})

app.use(limiter);

// this is allowing all the requests
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(helmet())
// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(mongoSanitize());

app.use("/api/user", UserRouter);
app.use("/api/product", ProductRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/booking", BookingRouter);
app.use("/api/review", ReviewRouter);




/******************handler functions ***************/
// 404 route not found
app.use(function cb(req, res) {
    // console.log("");
    // response 
    res.status(404).json({
        status: "failure",
        message: " route not found"
    })
})
// server -> run on a port 
app.listen(process.env.PORT || PORT, function () {
    console.log(` server is listening to port ${PORT}`);
})

/***
 * At code level -> prevent Repetiton -> Factory(controllers)
 * At file level -> structure to segregate the code  -> MVC
 * **/










