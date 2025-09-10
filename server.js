const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3005;
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const controller=require('./controller/controller')
app.use(controller)

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Sekar Server is running on port ${port}`);
})
