// //import { simplify } from './Items.js';
// //import { Meal } from './Meals.js';
// //import { Item } from './Items.js';
// //console.log(simplify('jhg jhg'));

// export class Search1 {
// 	constructor(page) {
// 		this.page = page;
// 		//this.ShownItems = [];
// 		this.listenToTextArea();
// 		this.itemSearch();
// 		this.upDateActiveFilters();
// 		this.selectedRecipes = this.page.recipes;
// 	}

// 	remove(array, element) {
// 		const index = array.indexOf(element);
// 		array.splice(index, 1);
// 	}

// 	listenToTextArea() {
// 		let page = this;
// 		let searchOn = false;
// 		let textArea = document.querySelector('input');
// 		textArea.addEventListener('input', function (e) {
// 			page.mainSearch = '';
// 			page.mainSearch = this.value.toLowerCase();
// 			page.selectRecipes();

// 			if (page.mainSearch.length > 2) {
// 				searchOn = true;
// 			}
// 			if (searchOn === true) {
// 				// page.page.hideAllCards();
// 				// page.refreshRecipeCards();
// 				// page.refreshDropDownMenus();
// 				page.recipesActionSequence();
// 			}

// 			if (page.selectedRecipes.length === 0 && page.mainSearch.length > 2) {
// 				window.alert(
// 					"Désolé, nous n'avons pas trouvé de recette correpondant à votre recherche"
// 				);
// 			}
// 		});
// 	}
// 	selectRecipes() {
// 		// = boucles natives = implementation1
// 		let string = this.mainSearch;
// 		this.selectedRecipes = this.page.recipes;
// 		console.log(this);
// 		for (let a = 0; a < this.page.recipes.length; a++) {
// 			let ingredientFound = false;
// 			this.page.recipes[a].ingredients.forEach((ingredient) => {
// 				if (ingredient.ingredient.toLowerCase().includes(string)) {
// 					ingredientFound = true;
// 				}
// 			});

// 			//console.log(this.page.recipes[a].ingredients);

// 			if (
// 				/// recherche titre
// 				ingredientFound === false &&
// 				this.page.recipes[a].name.toLowerCase().includes(string) == false &&
// 				this.page.recipes[a].description.toLowerCase().includes(string) ===
// 					false
// 			) {
// 				this.remove(this.selectedRecipes, this.page.recipes[a]);
// 			}
// 			// {
// 			// 	this.selectedRecipes.push(this.page.recipes[a]);
// 			// 	console.log(this.selectedRecipes);
// 			// }
// 			// else {this.page.recipes[a].ingredients.forEach((ingredient) => {
// 			// 	console.log(ingredient.ingredient.toLowerCase().includes(string));
// 			// });}
// 		}
// 		/////RAJOUTER LES DEUX AUTRES CRITERES
// 		/////REGLER PROBLEME PANNEL
// 	}
// 	// Implementation2: map
// 	recipesActionSequence() {
// 		this.page.hideAllCards();
// 		this.refreshRecipeCards();
// 		this.refreshDropDownMenus();
// 	}
// 	refreshRecipeCards() {
// 		this.selectedRecipes.forEach((meal) => {
// 			meal.displayCard();
// 		});
// 	}

// 	refreshDropDownMenus() {
// 		this.page.hideAllDropDownButtons();
// 		this.selectedRecipes.forEach((meal) => {
// 			for (let a = 0; a < meal.mealItems.length; a++) {
// 				//console.log(meal.mealItems[a].returnTagButton());

// 				if (meal.mealItems[a].returnTagButton().style.display !== 'block') {
// 					meal.mealItems[a].diplayDropDown();
// 				}
// 			}
// 		});
// 	}
// 	itemSearch() {
// 		let page = this;
// 		this.page.types.forEach((type) => {
// 			let query = 'input.bg-' + type.type;
// 			let input = document.querySelector(query);
// 			//console.log(input);
// 			input.addEventListener('input', function (e) {
// 				//	console.log(this.value);
// 				// page.page.hideAllDropDownButtons();
// 				page.itemSearch = this.value;
// 				//	console.log(page);
// 				page.formId = type.type;
// 				page.findTextInItems(page.itemSearch, page.formId);
// 			});
// 		});
// 		console.log(this);
// 	}
// 	findTextInItems(string, type) {
// 		//console.log(string);
// 		console.log(type);
// 		this.page.items.forEach((item) => {
// 			if (item.type === type) {
// 				item.hideDropDown();
// 				// console.log(item)
// 				// console.log()
// 				//console.log(item.name.toLowerCase().includes(string.toLowerCase()));
// 				//console.log(item.type.includes(type));
// 				if (
// 					item.name.toLowerCase().includes(string.toLowerCase()) === true
// 					//&&
// 					//item.type === type
// 				) {
// 					item.diplayDropDown();
// 					// //ole.log('coucou');
// 					// //console.log(item.name);
// 					// //console.log(item.type);
// 					// if (item.returnTagButton().style.display === 'none') {

// 					// }
// 				} else {
// 					//console.log('pas concerné');
// 					//console.log(item);
// 					//console.log(type);
// 				}
// 			}
// 		});
// 	}
// 	upDateActiveFilters() {
// 		let main = this;
// 		main.activeFilters = [];
// 		//console.log(main.page.items);
// 		main.page.items.forEach((item) => {
// 			item.returnDropDown().addEventListener('click', function (e) {
// 				main.activeFilters.push(item.name);
// 				//	console.log('main');
// 				main.filterRecipes();
// 			});
// 			item.returnTagButton().addEventListener('click', function (e) {
// 				main.remove(main.activeFilters, item.name);
// 				//console.log(main);
// 				main.filterRecipes();
// 			});
// 		});
// 	}

// 	filterRecipes() {
// 		let main = this;
// 		//console.log('cocou3');
// 		main.page.recipes.forEach(
// 			(recipe) => {
// 				recipe.tagSearched = false;
// 				let matches = 0;
// 				for (let a = 0; a < recipe.mealItems.length; a++) {
// 					for (let b = 0; b < main.currentTags.length; b++) {
// 						if (recipe.mealItems[a].name === main.currentTags[b]) {
// 							matches++;
// 						}
// 					}
// 				}
// 				//console.log(recipe);
// 				//	console.log(matches);
// 				if (matches === main.currentTags.length) {
// 					recipe.searchedByTags = true;
// 				}
// 			}

// 			//main.page.recipesActionSequence();
// 		);
// 	}
// }
