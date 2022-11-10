import React, {useState, useEffect} from 'react';

export default function Recipe( {meal} ) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(
      // `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=b841456a214f46eeb5059ede37a35a59&includeNutrition=false`
      // `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=dc639e7ebbd44c9dbd31fe4deb1ea437&includeNutrition=false`
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=dbc2e390cbfe4f92914fceb030362bdb&includeNutrition=false`
    )
    .then(res => res.json())
    .then(data => {
      setImageUrl(data.image)
      console.log(data);
    })
    .catch(() => {console.log('Error')})
  }, [meal.id])
  
  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="Meh images... overrated" />
      <ul>
        <li>Preparation Time: {meal.readyInMinutes} minutes</li>
        <li>Servings: {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl}>Take me there</a>
    </article>
  )
}