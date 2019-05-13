require("dotenv").config();
const mongoose = require("mongoose");
///////// PUT MODELS/////////////
const CityModel = require("../models/City.js");
const HousingModel = require("../models/Housing.js");
//////////Require json file aka "fake datas"////////
const cityData = require("./cities.json");
const housingData = require("./Housing.json");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

CityModel.insertMany(cityData)
  .then(dbRes => {
    console.log(`${dbRes.length} cities were added to my db`);
  })
  .catch(dbErr => {
    console.log("fail to insert cities to my db");
  });

HousingModel.insertMany(housingData)
  //   .populate("city")
  .then(dbRes => {
    console.log(`${dbRes.length} houses were added to my db`);
  })
  .catch(dbErr => {
    console.log("fail to insert houses to my db", err);
  });

// housingData.forEach(oneCity => {
//   CityModel.create(oneCity.city)
//     .then(cityDoc => {
//       oneCity.city = cityDoc._id;
//       console.log("city was created");

//       return HousingModel.create(oneHouse => {
//         console.log("one house was created");
//       });
//     })
//     .catch(err => console.log(err, "ffff"));
// });
