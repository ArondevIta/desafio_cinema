const connection = require("mongoose");

connection
  .connect(
    "mongodb+srv://admin:cinemapp@cluster0-gnpmg.mongodb.net/cinema?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("DB CONNECTED!"));

module.exports = connection;
