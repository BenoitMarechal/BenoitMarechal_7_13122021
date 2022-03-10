import { recipes } from './recipes.js';
import { Meal } from './Meals.js';
import { Appliance, ItemFactory, Ustensil } from './Items.js';
import { DropDown } from './Dropdown.js';

//console.log(recipes);

class HomePage {
	constructor() {
		this.getAllRecipes();
		this.writeAllCards();
		this.getAllItems();
		this.writeAllTags();
		this.gatherTypes();
		this.buildDropDown();
		this.writeAllDropDownBtns();
		this.hideAllTags();
		this.runTags();
		this.runDrops();
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
		//page.items = allItems;
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
		//	console.log(result);
		page.items = result;
		//console.log(page);
	}

	countEachType() {
		let page = this;
		let ingred = 0;
		let ustens = 0;
		let appli = 0;
		let total = 0;
		for (let i = 0; i < page.items.length; i++) {
			console.log(page.items[i].type);
			if (page.items[i].type === 'appliance') {
				appli++;
				total++;
			}
			if (page.items[i].type === 'ingredient') {
				ingred++;
				total++;
			}
			if (page.items[i].type === 'ustensil') {
				ustens++;
				total++;
			} else {
				// console.log('erreur');
				// console.log(page.items[i]);
			}
		}
		console.log('appli');
		console.log(appli);
		console.log('ingred');
		console.log(ingred);
		console.log('ustens');
		console.log(ustens);
		console.log('total');
		console.log(total);
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
	runTags() {
		this.items.forEach((item) => {
			item.listenToTag();
		});
	}
	runDrops() {
		this.items.forEach((item) => {
			item.listenToDrop();
		});
	}

	gatherTypes() {
		let page = this;
		page.types = [];
		let allTypes = [];
		let result = [];

		for (let i = 0; i < page.items.length; i++) {
			let found = false;
			for (let a = 0; a < result.length; a++) {
				if (page.items[i].type === result[a].type) {
					found = true;
				}
			}
			if (found === false) {
				result.push(page.items[i]);
			}
		}
		//	console.log(result);

		result.splice(0, 0, result[1]);
		result.splice(2, 1);
		//	console.log(result);

		page.types = result;
	}

	buildDropDown() {
		let page = this;
		console.log(page);
		this.types.forEach((type) => {
			//console.log(type);
			let menu = new DropDown(this, type);
		});
	}
	writeAllDropDownBtns() {
		this.items.forEach((item) => {
			item.writeDropDownButton();
		});
	}
}

let homepage = new HomePage();

//console.log(homepage);
//homepage.items[0].selectOff();
//homepage.items[1].selectOff();
// console.log(homepage.types[2]);

//let drop = new DropDown(homepage.types[2]);

// homepage.items[0].writeTagButton();
// homepage.items[0].displayTagButton();
