import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "e7087070";
  const APP_KEY = "d2fc028a5cb60acc295b03a1796cf1a9";

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(exampleRequest);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {};

  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className="search-form">
        <input className="search-bar" type="text" value={search} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
