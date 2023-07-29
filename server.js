const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Voloshun:z4CYyKzniR1O7dcn@cluster0.aknwarz.mongodb.net/Contacts_reader?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
