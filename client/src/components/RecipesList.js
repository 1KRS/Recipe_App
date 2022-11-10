import React from 'react'
import Recipe from './Recipe'

export default function RecipesList( {recipes} ) {
  const nutrients =  recipes.nutrients;
  const meals =  recipes.meals;
  
  return (
    <>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)} kcal</li>
          <li>Carbs: {nutrients.carbohydrates.toFixed(0)} g</li>
          <li>Fats: {nutrients.fat.toFixed(0)} g</li>
          <li>Protein: {nutrients.protein.toFixed(0)} g</li>
        </ul>
      </section>

      <section className="section--recipesList">
        {meals.map(meal => {
          return <Recipe key={meal.id} meal={meal} />
        })}
      </section>
    </>
  )
}