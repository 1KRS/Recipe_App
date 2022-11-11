import React, {useState, useEffect, useRef} from 'react';
// import React, {useNavigate} from 'react-router-dom';

import RecipesList from './RecipesList';

function App() {

  const [calories, setCalories] = useState('');
  const [recipes, setRecipes] = useState(null);
  const inputRef = useRef(null);

  // const fakeRecipes = [
  //   {id: 575630, imageType: "jpg", title: "Sinangag Breakfast Rice", readyInMinutes: 15, servings: 2, sourceUrl: "http://makobiscribe.com/sinangag-breakfast-rice-recipe/", title: "Sinangag Breakfast Rice"},
  //   {id: 575630, imageType: "jpg", title: "Sinangag Breakfast Rice", readyInMinutes: 15, servings: 2, sourceUrl: "http://makobiscribe.com/sinangag-breakfast-rice-recipe/", title: "Sinangag Breakfast Rice"},
  //   {id: 575630, imageType: "jpg", title: "Sinangag Breakfast Rice", readyInMinutes: 15, servings: 2, sourceUrl: "http://makobiscribe.com/sinangag-breakfast-rice-recipe/", title: "Sinangag Breakfast Rice"}
  // ]

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleSubmit = e => {
    if (e.target.value === '') {
      setCalories(inputRef.current.value);
    }
    e.preventDefault()
    setCalories(inputRef.current.value);
  }

  // const handleSubmitTwo = e => {
  //   e.preventDefault()
  //   setCalories(e.target.value);
  // }

  const getRecipes = (cal) => {
     fetch(cal)
    .then(data => data.json())
    .then(res => setRecipes(res))
    .catch(() => {console.log('Error')})
    // setRecipes(fakeRecipes);
    // console.log(recipes)
  }

  useEffect(() => {
    console.log('Θερμίδες', `/api/${calories}`)
    // console.log('Θερμίδες', fakeRecipes)
     getRecipes(`/api/${calories}`);
    // getRecipes(fakeRecipes);
  }, [calories]);


  // const getRecipes = () => {
    // fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=b841456a214f46eeb5059ede37a35a59&timeFrame=day&targetCalories=${calories}`)
    // fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=dc639e7ebbd44c9dbd31fe4deb1ea437&timeFrame=day&targetCalories=${calories}`)
  //   fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=dbc2e390cbfe4f92914fceb030362bdb&timeFrame=day&targetCalories=${calories}`)
  //   fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=b624a3e6a2fe4544affd85dd3fa41d78&timeFrame=day&targetCalories=${calories}`)
  //   fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=f348e2e93a6d43ddbbb1be8b4298baa7&timeFrame=day&targetCalories=${calories}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setRecipes(data);
  //     console.log(data);
  //   })
  //   .catch(() => {console.log('Error')})
  // }

  return (
    <>
      <h1 className="h1--title">Simple Daily Meal Planner</h1>
      <form className="section--recipesForm" onSubmit={handleSubmit}>
        <input
          type="number"
          onSubmit={handleSubmit}
          placeholder={"Write the daily calories you want"}
          ref={inputRef}
          required />
        <button className="button-recipes" onClick={handleSubmit} >Show me the food already</button>
      </form>
      {recipes && <RecipesList recipes={recipes} />}
    </>
  );
}

export default App;
