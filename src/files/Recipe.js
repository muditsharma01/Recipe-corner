import React from 'react';
import './Card.css'

function Recipe(props) {
  return (
    <div className='recipe mb-4'>
      <div className='recipe-image'>
        <img src={props.image} alt=''/>
      </div>
      <div className='recipe-details'>
        <h3 className='recipe-title'>{props.title}</h3>
        <div className='recipe-ingredients-container'>
          <h5>Ingredients:</h5>
          <ul className='recipe-ingredients'>
            {props.ingredients.map(ingredient => (
              <li key={ingredient.text}>{ingredient.text}</li>
            ))}
          </ul>
        </div>
        <h5>Calories:</h5>
        <p className='recipe-calories'>{props.calories * 0.239005736}</p>
      </div>
    </div>
  );
}

export default Recipe;
