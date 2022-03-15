export class Search2 {
	constructor(page) {
		this.page = page;
		//this.selectedRecipes = this.page.recipes; //init plus tard???
		this.mainSearch = ''; //init plus tard???
		this.currentTags = []; //init plus tard???
		this.getMainSearch();
		this.getCurrentTags();
		//this.itemSearch();
	}

	remove(array, element) {
		const index = array.indexOf(element);
		array.splice(index, 1);
	}
	getMainSearch() {
		let main = this;
		main.searchOn = false;
		let textArea = document.querySelector('input');
		textArea.addEventListener('input', function (e) {
			main.mainSearch = this.value.toLowerCase();
			console.log(main);
			if (main.mainSearch.length > 2) {
				main.searchOn = true;
			}
			main.searchFromText();
		});
	}
	searchFromText() {
		let main = this;
		//let searchOn = false;
		main.selectRecipesFromText();
		if (main.searchOn === true) {
			main.page.refreshPage();
		}
	}
	selectRecipesFromText() {
		//passe les recipe visible a true ou false
		// = boucles natives = implementation1
		let main = this;
		let string = main.mainSearch;
		for (let a = 0; a < main.page.recipes.length; a++) {
			main.page.recipes[a].textSearched = false;
			let ingredientFound = false;
			main.page.recipes[a].ingredients.forEach((ingredient) => {
				if (ingredient.ingredient.toLowerCase().includes(string)) {
					ingredientFound = true;
				}
			});
			if (
				ingredientFound === true ||
				main.page.recipes[a].name.toLowerCase().includes(string) === true ||
				main.page.recipes[a].description.toLowerCase().includes(string) === true
			) {
				main.page.recipes[a].textSearched = true;
			}
		}
	}
	getCurrentTags() {
		let main = this;
		this.page.items.forEach((item) => {
			item.returnDropDown().addEventListener('click', function (e) {
				main.currentTags.push(item.name);
				console.log(main);
				main.selectRecipesFromTags();
			});
			item.returnTagButton().addEventListener('click', function (e) {
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
			// console.log(recipe);
			// console.log(matches);
			// console.log(main.currentTags.length);
			if (matches === main.currentTags.length) {
				recipe.tagSearched = true;
			}
		});
		main.page.refreshPage();
	}
}