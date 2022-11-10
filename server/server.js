const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.json("Σε αναμονή συνταγών")
})

app.listen(port, () => {
  console.log(`Ο διακομιστής ακούει στη θύρα ${port}`)
});