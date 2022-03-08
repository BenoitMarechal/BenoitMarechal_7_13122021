import { recipes } from './recipes.js';
import { Meal } from './Meals.js';
import { Appliance, ItemFactory, Ustensil } from './Items.js';

//console.log(recipes);

class HomePage {
	constructor() {
		this.getAllRecipes();
		this.writeAllCards();
		this.getAllItems();
		this.writeAllTags();
		this.hideAllTags();
	}
	getAllRecipes() {
		this.recipes = [];
		recipes.forEach((recipe) => {
			//	console.log(recipe);
			this.recipes.push(new Meal(recipe));
		});
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
		let page = this;
		page.items = [];
		let allItems = [];

		//appliance
		page.recipes.forEach((recipe) => {
			allItems.push(new ItemFactory(new Appliance(recipe)));

			////end appliance
			////ingredient

			recipe.ingredients.forEach((ingredient) => {
				allItems.push(new ItemFactory(ingredient));
			});

			recipe.ustensils.forEach((ustensil) => {
				//	console.log(ustensil);
				allItems.push(new Ustensil(ustensil));
			});
		});
		page.items = allItems;
		let result = [];
		for (let i = 0; i < allItems.length; i++) {
			let found = false;
			for (let a = 0; a < result.length; a++) {
				if (allItems[i].simpName === result[a].simpName) {
					found = true;
				}
			}
			if (found === false) {
				result.push(allItems[i]);
			}
		}
		console.log(result);
		page.items = result;
	}

	writeAllTags() {
		this.items.forEach((item) => {
			item.writeTagButton();
		});
	}
	hideAllTags() {
		this.items.forEach((item) => {
			item.hideTagButton();
		});
	}
}
let homepage = new HomePage();

console.log(homepage);

// homepage.items[0].writeTagButton();
// homepage.items[0].displayTagButton();
