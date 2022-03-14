import { simplify } from './Items.js';
//import { Meal } from './Meals.js';
//import { Item } from './Items.js';
//console.log(simplify('jhg jhg'));

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
		// = boucles natives = implementation1
		this.selectedRecipes = [];
		for (let a = 0; a < this.page.recipes.length; a++) {
			let ingredientFound = false;
			this.page.recipes[a].ingredients.forEach((ingredient) => {
				if (ingredient.ingredient.toLowerCase().includes(string)) {
					ingredientFound = true;
				}
			});

			console.log(this.page.recipes[a].ingredients);

			if (
				/// recherche titre
				ingredientFound ||
				this.page.recipes[a].name.toLowerCase().includes(string) ||
				this.page.recipes[a].description.toLowerCase().includes(string)
			) {
				this.selectedRecipes.push(this.page.recipes[a]);
				console.log(this.selectedRecipes);
			}
			// else {this.page.recipes[a].ingredients.forEach((ingredient) => {
			// 	console.log(ingredient.ingredient.toLowerCase().includes(string));
			// });}
		}
		/////RAJOUTER LES DEUX AUTRES CRITERES
		/////REGLER PROBLEME PANNEL
	}
	// Implementation2: map
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
			let input = document.querySelector(query);
			console.log(input);
			input.addEventListener('input', function (e) {
				console.log(this.value);
				// page.page.hideAllDropDownButtons();
				page.itemSearch = this.value;
				console.log(page);
				page.formId = type.type;
				page.findTextInItems(page.itemSearch, page.formId);
			});
		});
		console.log(this);
	}
	findTextInItems(string, type) {
		//console.log(string);
		console.log(type);
		this.page.items.forEach((item) => {
			if (item.type === type) {
				item.hideDropDown();
				// console.log(item)
				// console.log()
				//console.log(item.name.toLowerCase().includes(string.toLowerCase()));
				//console.log(item.type.includes(type));
				if (
					item.name.toLowerCase().includes(string.toLowerCase()) === true
					//&&
					//item.type === type
				) {
					item.diplayDropDown();
					// //ole.log('coucou');
					// //console.log(item.name);
					// //console.log(item.type);
					// if (item.returnTagButton().style.display === 'none') {

					// }
				} else {
					//console.log('pas concerné');
					//console.log(item);
					//console.log(type);
				}
			}
		});
	}
}
