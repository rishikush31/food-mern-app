const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db');
const cors =require ("cors");
const path=  require('path');

app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname,'../build')));


app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/',require("./Routes/CreateUser"));
app.use('/api/',require("./Routes/DisplayData"));
app.use('/api/',require("./Routes/OrderData"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoDB();