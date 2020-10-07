const express =require('express');
const data =  require('./data.json');
const cors = require('cors')
const app = express();

app.use(cors());

// API for products
app.get("/api/products", (req, res) => {
  res.send(data);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.find(x => x._id === productId);
  if (product)
    res.send(product);
  else
    res.status(404).send({ msg: "Product Not Found." })
});

// a test case for  param and query string
app.get("/api/:id", (req, res) => {
  res.send(`<h1>Person:${req.params.id}</h1><h2>name: ${req.query.name}</h2>`);
});

app.listen(5000, () => { 
  console.log("Server started at http://localhost:5000") 
});
