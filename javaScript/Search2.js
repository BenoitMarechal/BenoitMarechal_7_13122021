//import { Item } from './Items';

export class Search2 {
	constructor(page) {
		this.page = page;
		//this.selectedRecipes = this.page.recipes; //init plus tard???
		this.mainSearch = ''; //init plus tard???
		this.currentTags = []; //init plus tard???
		this.getMainSearch();
		this.getCurrentTags();
		this.itemSearch();
	}

	remove(array, element) {
		const index = array.indexOf(element);
		array.splice(index, 1);
	}
	getMainSearch() {
		let main = this;
		// main.searchOn = false;
		let textArea = document.querySelector('input');
		textArea.addEventListener('input', function (e) {
			main.searchOn = false;
			main.mainSearch = this.value.toLowerCase();
			//console.log(main);
			if (main.mainSearch.length > 2) {
				main.searchOn = true;
			}
			main.searchFromText();
		});
	}
	searchFromText() {
		let main = this;
		main.selectRecipesFromText5();
		if (main.searchOn === true) {
			main.page.refreshPage();
		}
	}
	// selectRecipesFromText1() {
	// 	//passe les recipe.visible a true ou false
	// 	// = boucles natives = implementation1
	// 	let main = this;
	// 	let string = main.mainSearch;
	// 	for (let a = 0; a < main.page.recipes.length; a++) {
	// 		//main.page.recipes[a].textSearched = false;
	// 		if (
	// 			main.page.recipes[a].name.toLowerCase().includes(string) === true ||
	// 			main.page.recipes[a].description.toLowerCase().includes(string) ===
	// 				true ||
	// 			main.page.recipes[a].ingredients.indexOf(string) !== -1
	// 		) {
	// 			main.page.recipes[a].textSearched = true;
	// 		} else {
	// 			main.page.recipes[a].textSearched = false;
	// 		}
	// 	}
	// }

	// selectRecipesFromText2() {
	// 	//utilise filter
	// 	//passe les recipe.visible a true ou false
	// 	// = boucles natives = implementation1
	// 	let main = this;
	// 	let string = main.mainSearch;
	// 	let filtered = this.page.recipes.filter(
	// 		(recipe) =>
	// 			recipe.name.toLowerCase().includes(string) === true ||
	// 			recipe.description.toLowerCase().includes(string) === true ||
	// 			recipe.ingredients.indexOf(string) !== -1
	// 	);
	// 	console.log(filtered);
	// 	main.page.recipes.forEach((mainrecipe) => {
	// 		console.log(mainrecipe);
	// 		console.log(filtered.indexOf(mainrecipe));
	// 		if (filtered.indexOf(mainrecipe) === -1) {
	// 			mainrecipe.textSearched = false;
	// 		} else mainrecipe.textSearched = true;
	// 	});
	// }

	// selectRecipesFromText3() {
	// 	//passe les recipe.visible a true ou false
	// 	// = boucles natives = implementation1
	// 	let main = this;
	// 	let string = main.mainSearch;
	// 	for (let a = 0; a < main.page.recipes.length; a++) {
	// 		let ingredientFound = false;
	// 		main.page.recipes[a].ingredients.forEach((ingredient) => {
	// 			if (ingredient.ingredient.toLowerCase().includes(string)) {
	// 				ingredientFound = true;
	// 			}
	// 		});

	// 		//main.page.recipes[a].textSearched = false;
	// 		if (
	// 			main.page.recipes[a].name.toLowerCase().includes(string) === true ||
	// 			main.page.recipes[a].description.toLowerCase().includes(string) ===
	// 				true ||
	// 			ingredientFound === true
	// 			//main.page.recipes[a].ingredients.indexOf(string) !== -1
	// 		) {
	// 			main.page.recipes[a].textSearched = true;
	// 		} else {
	// 			main.page.recipes[a].textSearched = false;
	// 		}
	// 	}
	// }

	selectRecipesFromText4() {
		//passe les recipe.visible a true ou false
		// = boucles natives = implementation1
		let main = this;
		let string = main.mainSearch;
		for (let a = 0; a < main.page.recipes.length; a++) {
			let ingredientFound = false;
			for (let b = 0; b < main.page.recipes[a].ingredients.length; b++)
				//main.page.recipes[a].ingredients.forEach((ingredient) => {
				if (
					main.page.recipes[a].ingredients[b].ingredient
						.toLowerCase()
						.includes(string)
				) {
					ingredientFound = true;
				}
			//});

			//main.page.recipes[a].textSearched = false;
			if (
				main.page.recipes[a].name.toLowerCase().includes(string) === true ||
				main.page.recipes[a].description.toLowerCase().includes(string) ===
					true ||
				ingredientFound === true
				//main.page.recipes[a].ingredients.indexOf(string) !== -1
			) {
				main.page.recipes[a].textSearched = true;
			} else {
				main.page.recipes[a].textSearched = false;
			}
		}
	}

	selectRecipesFromText5() {
		//passe les recipe.visible a true ou false
		// = boucles natives = implementation1
		let main = this;
		let string = main.mainSearch;
		main.page.recipes.forEach((recipe) => {
			if (
				recipe.name.toLowerCase().includes(string) === true ||
				recipe.description.toLowerCase().includes(string) === true ||
				recipe.ingredients.indexOf(string) !== -1
			) {
				recipe.textSearched = true;
			} else {
				recipe.textSearched = false;
			}
		});
	}

	getCurrentTags() {
		let main = this;
		this.page.items.forEach((item) => {
			item.returnDropDown().addEventListener('click', function (e) {
				main.currentTags.push(item.name);
				//	console.log(main);
				main.selectRecipesFromTags();
				main.allItemInputs.forEach((input) => {
					input.value = '';
				});
			}); //pointer sur la croix
			item
				.returnTagButton()
				.querySelector('.item-tag__close')
				.addEventListener('click', function (e) {
					main.remove(main.currentTags, item.name);
					console.log(main);
					main.selectRecipesFromTags();
				});
		});
	}
	selectRecipesFromTags() {
		let main = this;
		main.page.recipes.forEach((recipe) => {
			recipe.tagSearched = false;
			let matches = 0;
			for (let a = 0; a < recipe.mealItems.length; a++) {
				for (let b = 0; b < main.currentTags.length; b++) {
					if (recipe.mealItems[a].name === main.currentTags[b]) {
						matches++;
					}
				}
			}
			if (matches === main.currentTags.length) {
				recipe.tagSearched = true;
			}
		});
		main.page.refreshPage();
	}

	itemSearch() {
		let main = this;
		main.allItemInputs = [];
		main.page.types.forEach((type) => {
			let query = 'input.bg-' + type.type;
			let input = document.querySelector(query);
			main.allItemInputs.push(input);
			input.addEventListener('input', function (e) {
				// page.page.hideAllDropDownButtons();
				main.itemSearch = this.value.toLowerCase();
				main.formId = type.type;
				main.findTextInItems(main.itemSearch, main.formId);
			});
		});
	}
	findTextInItems(string, type) {
		// console.log(string);
		console.log('find text in tems');
		console.log(this);
		// console.log(type);
		// console.log(this);
		this.page.setAllDropDowns(); //back to
		this.page.items.forEach((item) => {
			if (item.visible === true) {
				//onlyvisible items
				if (item.type === type) {
					item.visible = false;
					if (item.name.toLowerCase().includes(string) === true) {
						item.visible = true;
					}
				}
			}
		});
		this.page.updateDropDowns();
	}
}
