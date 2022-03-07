import { recipes } from './recipes.js';
import { Meal } from './Meals.js';
import { Appliance, Ingredient, Item, ItemFactory, Ustensil } from './Items.js';

//console.log(recipes);

class HomePage {
	constructor() {
		this.getAllRecipes();
		this.writeAllCards();
		this.getAllItems();
	}
	getAllRecipes() {
		this.recipes = [];
		recipes.forEach((recipe) => {
			console.log(recipe);
			this.recipes.push(new Meal(recipe));
		});
		//console.log(this.recipes);
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
	getAllItems() {
		console.log(this.recipes);
		this.items = [];
		let page = this;
		console.log(page.items);

		//appliance
		page.recipes.forEach((recipe) => {
			//console.log(recipe.appliance);

			page.items.push(new ItemFactory(new Appliance(recipe)));

			////end appliance
			////ingredient

			recipe.ingredients.forEach((ingredient) => {
				page.items.push(new ItemFactory(ingredient));
			});

			recipe.ustensils.forEach((ustensil) => {
				console.log(ustensil);
				page.items.push(new Ustensil(ustensil));
			});
		});
		console.log(this);
	}
}
let homepage = new HomePage();
