import { recipes } from './recipes.js';
import { Meal } from './Meals.js';
import { Appliance, ItemFactory, Ustensil } from './Items.js';
import { DropDown } from './dropDown.js';
import { Search } from './Search.js';

class HomePage {
	constructor() {
		this.getAllRecipes();
		this.writeAllCards();
		this.getAllItems();
		this.writeAllTags();
		this.hideAllTags();
		this.gatherTypes();
		this.buildDropDown();
		this.writeAllDropDownBtns();
		this.runTags();
		this.runDrops();
		this.runSearch();
		this.alert = document.getElementById('alert');
	}
	getAllRecipes() {
		this.recipes = [];
		recipes.forEach((recipe) => {
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

	refreshPage() {
		this.recipes.forEach((recipe) => {
			recipe.upDateCard();
		});
		this.setAllDropDowns();
		this.alertCheck();
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
				allItems.push(new Ustensil(ustensil));
			});
		});
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
		page.items = result;
	}
	setAllDropDownFalse() {
		this.items.forEach((item) => {
			item.visible = false;
		});
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
		result.splice(0, 0, result[1]);
		result.splice(2, 1);
		page.types = result;
	}

	buildDropDown() {
		let page = this;
		this.types.forEach((type) => {
			let menu = new DropDown(this, type);
		});
	}
	writeAllDropDownBtns() {
		this.items.forEach((item) => {
			item.writeDropDownButton();
		});
	}

	setAllDropDowns() {
		//gets visible recipes, turns items to visible, refresh
		let main = this;
		main.setAllDropDownFalse();
		main.recipes.forEach((recipe) => {
			if (recipe.visible === true) {
				for (let a = 0; a < recipe.mealItems.length; a++) {
					{
						for (let b = 0; b < main.items.length; b++) {
							if (
								recipe.mealItems[a].name === main.items[b].name &&
								main.items[b].returnTagButton().style.display !== 'block'
							) {
								main.items[b].visible = true;
							}
						}
					}
				}
			}
		});
		main.updateDropDowns();
	}

	updateDropDowns() {
		this.items.forEach((item) => {
			if (item.visible === true) {
				item.diplayDropDown();
			}
			if (item.visible === false) {
				item.hideDropDown();
			}
		});
	}

	runSearch() {
		let search = new Search(this);
	}
	alertOn() {
		//this.alert = document.getElementById('alert');
		this.alert.classList.remove('hidden');
	}
	alertOff() {
		this.alert.classList.add('hidden');
	}
	alertCheck() {
		let allHidden = true;
		this.recipes.forEach((recipe) => {
			if (recipe.visible === true) {
				allHidden = false;
			}
		});
		if (allHidden === true) {
			this.alertOn();
		} else {
			this.alertOff();
		}
	}
}

let homepage = new HomePage();
