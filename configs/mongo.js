const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log("YAY ! connected to db 👍");
});

mongoose.connection.on("error", () => {
  console.log("no mongo connection, HAHA you failed !!! ::laughing");
});

module.exports = mongoose.connection;