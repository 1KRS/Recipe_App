const express = require('express');
const app = express();
const port = 3000;

// app.route('/api/')
//   .get((req, res) => {
//     res.status(200).send("Μήνυμα ελήφθη. Σε αναμονή συνταγών")
//   })
app.route('/api/:calories')
  .get((req, res) => {
    const calories = req.params.calories;
    const recipiesData = fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=b841456a214f46eeb5059ede37a35a59&timeFrame=day&targetCalories=${calories}`)

    res.status(200).send(recipiesData);
  })

app.listen(port, () => {
  console.log(`Ο διακομιστής ακούει στη θύρα ${port}`)
});

