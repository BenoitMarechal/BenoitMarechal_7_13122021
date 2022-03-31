export class Search {
	constructor(page) {
		this.page = page;
		this.mainSearch = '';
		this.currentTags = [];
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
		let textArea = document.querySelector('input');
		main.searchOn = false;
		textArea.addEventListener('input', function (e) {
			main.mainSearch = this.value.toLowerCase();
			if (main.mainSearch.length > 2) {
				main.searchOn = true;
			}
			main.searchFromText();
		});
	}
	searchFromText() {
		let main = this;
		main.selectRecipesFromText1();
		if (main.searchOn === true) {
			main.page.refreshPage();
		}
	}
	selectRecipesFromText1() {
		//passe les recipe.visible a true ou false
		// = boucles natives = implementation1
		let main = this;
		let string = main.mainSearch;
		for (let a = 0; a < main.page.recipes.length; a++) {
			let ingredientFound = false;
			for (let b = 0; b < main.page.recipes[a].ingredients.length; b++)
				if (
					main.page.recipes[a].ingredients[b].ingredient
						.toLowerCase()
						.includes(string)
				) {
					ingredientFound = true;
				}

			if (
				main.page.recipes[a].name.toLowerCase().includes(string) === true ||
				main.page.recipes[a].description.toLowerCase().includes(string) ===
					true ||
				ingredientFound === true
			) {
				main.page.recipes[a].textSearched = true;
			} else {
				main.page.recipes[a].textSearched = false;
			}
		}
	}

	// selectRecipesFromText2() {
	// 	//passe les recipe.visible a true ou false
	// 	// utilisation de boucles forEach et de indexOf()
	// 	let main = this;
	// 	let string = main.mainSearch;
	// 	main.page.recipes.forEach((recipe) => {
	// 		if (
	// 			recipe.name.toLowerCase().includes(string) === true ||
	// 			recipe.description.toLowerCase().includes(string) === true ||
	// 			recipe.ingredients.indexOf(string) !== -1
	// 		) {
	// 			recipe.textSearched = true;
	// 		} else {
	// 			recipe.textSearched = false;
	// 		}
	// 	});
	// }

	getCurrentTags() {
		let main = this;
		this.page.items.forEach((item) => {
			item.returnDropDown().addEventListener('click', function (e) {
				main.currentTags.push(item.name);
				main.selectRecipesFromTags();
				main.allItemInputs.forEach((input) => {
					input.value = '';
				});
			});
			//pointer sur la croix
			item
				.returnTagButton()
				.querySelector('.item-tag__close')
				.addEventListener('click', function (e) {
					main.remove(main.currentTags, item.name);
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
				main.itemSearch = this.value.toLowerCase();
				main.formId = type.type;
				main.findTextInItems(main.itemSearch, main.formId);
			});
		});
	}
	findTextInItems(string, type) {
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
