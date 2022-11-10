import React, {useState, useEffect} from 'react';
import RecipesList from './components/RecipesList';
import './App.css';

function App() {

  const [calories, setCalories] = useState(1500);
  const [recipes, setRecipes] = useState(null);

  const handleChange = (e) => {
    setCalories(e.target.value);
  }

  const getRecipes = (cal) => {
     fetch(cal)
    .then(data => data.json())
    .then(res => setRecipes(res))
    .catch(() => {console.log('Error')})
  }
  console.log(recipes)

  useEffect(() => {
    console.log('Θερμίδες', `api/${calories}`)
    getRecipes(`api/${calories}`);
  }, [calories]);


  // const getRecipes = () => {
    // fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=b841456a214f46eeb5059ede37a35a59&timeFrame=day&targetCalories=${calories}`)
    // fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=dc639e7ebbd44c9dbd31fe4deb1ea437&timeFrame=day&targetCalories=${calories}`)
  //   fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=dbc2e390cbfe4f92914fceb030362bdb&timeFrame=day&targetCalories=${calories}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setRecipes(data);
  //     console.log(data);
  //   })
  //   .catch(() => {console.log('Error')})
  // }

  return (
    <>
      <section className="Calories">
        <input type="number" placeholder="e.g. 1500" onClick={handleChange} />
      </section>
      <button onClick={getRecipes}>Show me the food</button>
      {recipes && <RecipesList recipes={recipes} />}
    </>
  );
}

export default App;
