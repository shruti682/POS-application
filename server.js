const express = require("express");
const dbConnect = require("./dbConnect");
const cors=require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const itemsRoute = require("./routes/itemsRoute");
const usersRoute = require("./routes/userRoute");
const billsRoute = require('./routes/billsRoute')
app.use("/items/", itemsRoute);
app.use("/users/", usersRoute);
app.use("/bills/", billsRoute);
const path = require('path')
const port = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("Hello World! from home api"));
app.listen(port, () => console.log(`Node JS Server Running at port ${port}`));
