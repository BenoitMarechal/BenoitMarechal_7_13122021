import { recipes } from './recipes.js';
import { Meal } from './Meals.js';

//console.log(recipes);

class HomePage {
	constructor() {
		this.getAllRecipes();
		this.writeAllCards();
	}
	getAllRecipes() {
		this.recipes = [];
		recipes.forEach((recipe) => {
			console.log(recipe);
			this.recipes.push(new Meal(recipe));
		});
		console.log(this.recipes);
	}
	writeAllCards() {
		this.recipes.forEach((recipe) => {
			recipe.writeCard();
		});
	}
	hideAllCards() {
		this.recipes.forEach((recipe) => {
			recipe.hideCard();
		});
	}
	displayAllCards() {
		this.recipes.forEach((recipe) => {
			recipe.displayCard();
		});
	}
}
let homepage = new HomePage();
