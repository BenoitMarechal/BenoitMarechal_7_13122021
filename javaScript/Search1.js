import { simplify } from './Items.js';
//import { Meal } from './Meals.js';
//import { Item } from './Items.js';
console.log(simplify('jhg jhg'));

export class Search1 {
	constructor(page) {
		this.page = page;
		//this.ShownItems = [];
		this.listenToTextArea();
		this.itemSearch();
	}

	listenToTextArea() {
		let page = this;
		let searchOn = false;
		let textArea = document.querySelector('input');
		textArea.addEventListener('input', function (e) {
			page.mainSearch = '';
			page.mainSearch = this.value.toLowerCase();
			page.selectRecipes(page.mainSearch);

			if (page.mainSearch.length > 2) {
				searchOn = true;
			}
			if (searchOn === true) {
				// page.page.hideAllCards();
				// page.refreshRecipeCards();
				// page.refreshDropDownMenus();
				page.recipesActionSequence();
			}

			if (page.selectedRecipes.length === 0 && page.mainSearch.length > 2) {
				window.alert(
					"Désolé, nous n'avons pas trouvé de recette correpondant à votre recherche"
				);
			}
		});
	}
	selectRecipes(string) {
		this.selectedRecipes = [];
		for (let a = 0; a < this.page.recipes.length; a++) {
			if (this.page.recipes[a].name.toLowerCase().includes(string) === true) {
				this.selectedRecipes.push(this.page.recipes[a]);
			}
		}
	}
	recipesActionSequence() {
		this.page.hideAllCards();
		this.refreshRecipeCards();
		this.refreshDropDownMenus();
	}
	refreshRecipeCards() {
		this.selectedRecipes.forEach((meal) => {
			meal.displayCard();
		});
	}

	refreshDropDownMenus() {
		this.page.hideAllDropDownButtons();
		this.selectedRecipes.forEach((meal) => {
			for (let a = 0; a < meal.mealItems.length; a++) {
				//console.log(meal.mealItems[a].returnTagButton());

				if (meal.mealItems[a].returnTagButton().style.display !== 'block') {
					meal.mealItems[a].diplayDropDown();
				}
			}
		});
	}
	itemSearch() {
		let page = this;
		this.page.types.forEach((type) => {
			let query = 'input.bg-' + type.type;
			console.log(query);
			let input = document.querySelector(query);

			input.addEventListener('input', function (e) {
				page.page.hideAllDropDownButtons();
				page.itemSearch = this.value;
				page.formId = type.type;
				page.findTextInItems(page.itemSearch, type.type);
			});
		});
	}
	findTextInItems(string, type) {
		// console.log(string);
		// console.log(type);
		this.page.items.forEach((item) => {
			//console.log(item.name.toLowerCase().includes(string.toLowerCase()));
			//console.log(item.type.includes(type));
			if (
				item.name.toLowerCase().includes(string.toLowerCase()) === true &&
				item.type.includes(type) === false
			) {
				console.log('coucou');
				console.log(item.name);
				if (item.returnTagButton().style.display === 'none') {
					item.diplayDropDown();
				}
			} else {
				//console.log('pas concerné');
				//console.log(item);
				//console.log(type);
			}
		});
	}
}
