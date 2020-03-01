import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';
import './App.css';

const App = () => {

  const APP_ID = '0275a443';
  const APP_KEY = "ec8f637d94fdc686df77967a68da77ca";

  const [recipec, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const responce = await fetch
    (`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await responce.json();
    setRecipes(data.hits);   
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">search</button>
        </form>
        {Recipes.map(recipe => (
          <Recipe/> 
        ))};
    </div>
  );
};
export default App;
