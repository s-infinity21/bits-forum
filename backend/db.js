const mongoose = require("mongoose");

const url =
  "mongodb+srv://asati_ji19:Chintu$0104@bitsbytes.lzx0o.mongodb.net/?retryWrites=true&w=majority&appName=bitsbytes";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
