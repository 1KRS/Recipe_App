import React, {useState} from 'react';
import RecipesList from './components/RecipesList';
import './App.css';

function App() {

  const [calories, setCalories] = useState(1500);
  const [recipes, setRecipes] = useState(null);

  const handleChange = (e) => {
    setCalories(e.target.value);
  }

  useEffect(() => {
    console.log(`api/${input}`)
    getVideos(`api/${input}`);
  }, [input]);

  const getRecipes = () => {
    // fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=b841456a214f46eeb5059ede37a35a59&timeFrame=day&targetCalories=${calories}`)
    fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=b841456a214f46eeb5059ede37a35a59&timeFrame=day&targetCalories=${calories}`)
    .then((res) => res.json())
    .then((data) => {
      setRecipes(data);
      console.log(data);
    })
    .catch(() => {console.log('Error')})
  }

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
