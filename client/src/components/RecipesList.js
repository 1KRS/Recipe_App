import React from 'react'
import Recipe from './Recipe'

export default function RecipesList( {recipes} ) {
  const nutrients =  recipes.nutrients;
  const meals =  recipes.meals;
  
  return (
    <main>
    
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories} kcal</li>
          <li>Carbs: {nutrients.carbohydrates} g</li>
          <li>Fats: {nutrients.fat} g</li>
          <li>Protein: {nutrients.protein} g</li>
        </ul>
      </section>

      <section className="recipes">
        {meals.map(meal => {
          return <Recipe key={meal.id} meal={meal} />
        })}
      </section>
    </main>
  )
}