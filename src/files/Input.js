import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './Recipe.css'

function Input() {
  const APP_ID = "75da8e9d";
  const APP_KEY = "dff492b49b19ec5b256b99ef72f359b5";

  const [recipes, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipies(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const changequery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const isInputEmpty = !search.trim();
  const funnyQuotes = [
    "Eating good food is like having a little bit of heaven in every bite.",
"Food is the language of the soul, and eating it is pure bliss.",
"When you're really hungry, even cardboard tastes like heaven.",
"Eating delicious food is like having a party in your mouth.",
"Good food is like a warm hug from the inside out.",
"Eating is not just about filling the stomach, it's about feeding the soul.",
"Eating is like a symphony, every bite is a note that harmonizes with the others.",
"Food is the bridge that brings people together, and eating it is like a celebration of life.",
"Eating is like a journey, every meal takes you to a different destination.",
"There's nothing better than a good meal, it's like a mini vacation for the soul.",
"Eating good food is like getting a warm embrace from a loved one.",
"When you eat good food, it's like the world is a little bit brighter and a lot more flavorful.",
"Eating is not a task, it's an experience that engages all your senses and leaves you feeling satisfied.",
"Food is not just fuel, it's love that you can taste.",
"Eating is like a love affair, you savor every moment and can't wait to experience it again."   
  ];

  return (
    <>
      <div className="container-fluid  bg-dark">
        <form onSubmit={changequery}>
          <div className="col-auto h-100 text-center">
            <label htmlFor="staticEmail2" className="text-white  fs-2 mt-2">
              Type the Recipe to Search
            </label>
          </div>
          <div className="col-auto mb-3 mt-4">
            <input
              type="text"
              className="form-control"
              id="recipe"
              value={search}
              onChange={updateSearch}
              placeholder="Search Recipe..."
            />
            {isInputEmpty && (
              <div className="empty-input-message">
                <i className="fas fa-cooker"></i>
                <span>Please enter a recipe to search</span>
              </div>
            )}
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-warning mb-3">
              Search Recipe
            </button>
          </div>
        </form>
      </div>
      <div className="container bg-dark text-light mt-2 p-4">
        {recipes.length ? (
          recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
            />
          ))
        ) : (
          <div className="no-recipe-found">
            <i className="fas fa-sad-tear"></i>
            {isInputEmpty
                ? funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)]
                : "No recipe found. Please try again."}
          </div>
        )}
      </div>
    </>
  );
}

export default Input;
