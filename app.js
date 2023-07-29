const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const mongoose = require('mongoose')

const DB_HOST = "mongodb+srv://Voloshun:z4CYyKzniR1O7dcn@cluster0.aknwarz.mongodb.net/Contacts_reader?retryWrites=true&w=majority"
mongoose.connect(DB_HOST)
.then(() =>console.log("Database connect success"))
.catch(error => console.log(error.message))



const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = " Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;

// z4CYyKzniR1O7dcn