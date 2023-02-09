const express = require("express");
var cors = require("cors");
const connection = require("./config/db");
const dataRouter = require("./Routes/data.routes");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("coin");
});
app.use("/", dataRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Listing to port 8080");
  } catch (err) {
    console.log("Error in connection DB");
    console.log(err);
  }
});
