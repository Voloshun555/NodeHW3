const app = require("./app");

const mongoose = require("mongoose");
const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb+srv://Voloshun:z4CYyKzniR1O7dcn@cluster0.aknwarz.mongodb.net/db-contacts?retryWrites=true&w=majority")
  .then(() => {
    console.log("Database connection successful")
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
