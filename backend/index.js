require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const port = process.env.port || 8800; // This stm is imp. while deployment
const cookieParser = require("cookie-parser");
const authRoute = require("./server/routes/AuthRoute");

const app = express();
const uri = process.env.MONGO_URL;

const bodyParser = require('body-parser');
const cors = require('cors');
const allowedOrigins = ['http://localhost:3000','http://localhost:3001', 'http://localhost:3001/:username/'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // Allow credentials (cookies) to be sent
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// One time setup to add dummy data to DB
const { HoldingsModel } = require("./server/model/HoldingsModel");
// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];
//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name ,
//       qty: item.qty,
//       avg: item.avg ,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send('Holdings data saved!');
// });

const { PositionsModel } = require("./server/model/PositionsModel");
// app.get("/addPositions", async (req, res) => {
//   let tempPostions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempPostions.forEach((item) => {
//     let newPosition = new PositionsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//     });
//     newPosition.save();
//   });
//   res.send('Positions data saved!');
// });


// METHOD TO DISPLAY DB DATA ON Dashboard - by creating an API data endpoint

app.get('/allHoldings', async (req,res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings)
});

app.get('/allPositions', async (req,res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions)
});






app.listen(port, () => {
  console.log(`App is Listening to port no ${port}`);
  mongoose.connect(uri);
  console.log("DB Connected!");
});

// app.use(
//   cors({
//     origin: ["http://localhost:8080"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoute);