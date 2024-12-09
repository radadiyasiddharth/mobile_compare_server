const { default: mongoose } = require("mongoose");

const databaseConnetion = () => {
  mongoose
    .connect(
      "mongodb+srv://aryan:Siddh123@cluster0.hkxzv.mongodb.net/devicedecider"
    )
    .then(() => {
      console.log("connect database");
    }) 
    .catch((err) => {
      console.log(err);
    });
};

module.exports = databaseConnetion;
