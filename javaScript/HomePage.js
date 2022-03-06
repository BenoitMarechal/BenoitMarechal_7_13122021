import { recipes } from './recipes.js';
import { Card } from './Cards.js';

console.log(recipes);

class HomePage {
	constructor() {
		this.writeAllCards();
	}

	writeAllCards() {
		recipes.forEach((recipe) => {
			let recipeCard = new Card(recipe);
		});
	}
}

let homepage = new HomePage();
