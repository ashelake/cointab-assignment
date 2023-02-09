const { default: axios } = require("axios");
const express = require("express");
const DataModal = require("../Modal/data.modal");

const dataRouter = express.Router();

dataRouter.get("/data", async (req, res) => {
  const mydata = await axios
    .get("https://randomuser.me/api/?results=50")
    .then((response) => {
      return response.data.results;
    });
  const getdata = await DataModal.find();

  // if (mydata.length > 0 && getdata.length < 50) {
  if (mydata) {
    await DataModal.remove();
    const adddata = await DataModal.insertMany(mydata);
    res.send(adddata);
  } else {
    res.send(getdata);
  }
});

dataRouter.delete("/data", async (req, res) => {
  await DataModal.remove();
  res.send({msg:"Dropped"});
});
dataRouter.get("/user", async (req, res) => {
  const { page, gender } = req.query;
  if (!page) {
    page = 1;
  }
  const skip = (page - 1) * 10;
  let getdata = "";
  if (!gender) {
    getdata = await DataModal.find().skip(skip).limit(10);
  } else {
    getdata = await DataModal.find({ gender: gender }).skip(skip).limit(10);
  }
  res.send(getdata);
});
module.exports = dataRouter;
