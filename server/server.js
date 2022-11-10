const express = require('express');
const app = express();
const port = 5000;

// app.route('/api/')
//   .get((req, res) => {
//     res.status(200).send("Μήνυμα ελήφθη. Σε αναμονή συνταγών")
//   })
app.route('/api/:calories')
  .get( async(req, res) => {
    const calories = req.params.calories;
    // await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=b841456a214f46eeb5059ede37a35a59&timeFrame=day&targetCalories=${calories}`)
    // await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=dc639e7ebbd44c9dbd31fe4deb1ea437&timeFrame=day&targetCalories=${calories}`)
    // await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=dbc2e390cbfe4f92914fceb030362bdb&timeFrame=day&targetCalories=${calories}`)
    // await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=b624a3e6a2fe4544affd85dd3fa41d78&timeFrame=day&targetCalories=${calories}`)
    await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=f348e2e93a6d43ddbbb1be8b4298baa7&timeFrame=day&targetCalories=${calories}`)
    .then((res) => res.json())
    .then((data) => {
      res.status(200).send(data)
      console.log('Data', data);
    })
  })

app.route

app.listen(port, () => {
  console.log(`Ο διακομιστής ακούει στη θύρα ${port}`)
});

