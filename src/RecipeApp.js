import React, {Component} from 'react';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "spaghetti.jpg"
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "milkshake.jpg"
        },
        {
          id: 2,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "avocado_toast.jpg"
        }
      ],
      nextRecipeId: 3,
    }

    this.handelSave = this.handelSave.bind(this);
  }

  handelSave(recipe) {
    this.setState((precState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: precState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeInput onSave={this.handelSave}/>
        <RecipeList recipes={this.state.recipes} />
      </div>
    )
  }
}

export default RecipeApp;
