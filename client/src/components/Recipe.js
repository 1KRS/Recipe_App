import React, {useState, useEffect} from 'react';

export default function Recipe( {meal} ) {
  const [imageUrl, setImageUrl] = useState(1500);

  useEffect(() => {
    fetch(
      // `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=b841456a214f46eeb5059ede37a35a59&includeNutrition=false`
      // `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=dc639e7ebbd44c9dbd31fe4deb1ea437&includeNutrition=false`
      // `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=dbc2e390cbfe4f92914fceb030362bdb&includeNutrition=false`
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=b624a3e6a2fe4544affd85dd3fa41d78&includeNutrition=false`
      // `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=f348e2e93a6d43ddbbb1be8b4298baa7&includeNutrition=false`
    )
    .then(res => res.json())
    .then(data => {
      setImageUrl(data.image)
    })
    .catch(() => {console.log('Error')})
  }, [meal.id])
  
  return (
    <article className="recipe">
      <div className="img">
        <img src={imageUrl} alt="Meh images... overrated" />
      </div>
      <h1 className="article--h1-title">{meal.title}</h1>
      {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Ffood&psig=AOvVaw2eivXQ-r-esqkZDZ58kh62&ust=1668201938087000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDk7tHGpPsCFQAAAAAdAAAAABAE" alt="Meh images... overrated" /> */}
      <ul>
        <li>Preparation Time: {meal.readyInMinutes} minutes</li>
        <li>Servings: {meal.servings}</li>
      </ul>
      <div className="link">
        <a href={meal.sourceUrl}>Take me there</a>
      </div>
    </article>
  )
}