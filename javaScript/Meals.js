import { Appliance, ItemFactory, Ustensil } from './Items.js';

let elementsOfCards = {
	typeOfElement: [
		'div',
		'div',
		'div',
		'div',
		'div',
		'div',
		'div',
		'div',
		'div',
		'span',
		'span',
		'span',
		'div',
	],
	classesOfElement: [
		['col', 'col-12', 'col-sm-4', 'cardsGalleryCol'],
		['meal'],
		['meal__img', 'text-center', 'bg-empty-image'],
		['meal__txt', 'bg-light-grey'],
		['row', 'meal__txt__upper', 'd-flex', 'justify-content-between'],
		['col', 'h2', 'col-8', 'meal__txt__upper__title'],
		[
			'col',
			'col-4',
			'meal__txt__upper__time',
			'd-flex',
			'justify-content-end',
			'align-item-center',
		],
		[
			'row',
			'meal__txt__lower',
			'd-flex',
			'justify-content-between',
			'overflow-hidden',
			'mb-3',
		],
		['col', 'col-8', 'meal__txt__lower__ingredient'],
		['meal__txt__lower__ingredient__type'],
		['meal__txt__lower__ingredient__qty'],
		['meal__txt__lower__ingredient__unit'],
		[
			'col',
			'col-4',
			'meal__txt__lower__recipe',
			'd-flex',
			'justify-content-end',
			'align-item-center',
		],
	],
	parentsOfElements: [
		'cardsGalleryRow',
		'cardsGalleryCol',
		'meal',
		'meal',
		'meal__txt',
		'meal__txt__upper',
		'meal__txt__upper',
		'meal__txt',
		'meal__txt__lower',
		'meal__txt__lower__ingredient',
		'meal__txt__lower__ingredient',
		'meal__txt__lower__ingredient',
		'meal__txt__lower',
	],
};

export class Meal {
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.servings = data.servings;
		this.ingredients = data.ingredients;
		this.time = data.time;
		this.description = data.description;
		this.appliance = data.appliance;
		this.ustensils = data.ustensils;
		this.groupItems();
		//this = data;
	}
	writeCard() {
		let meal = this;
		//console.log(this);
		for (let i = 0; i < elementsOfCards.typeOfElement.length; i++) {
			let element = document.createElement(elementsOfCards.typeOfElement[i]);
			for (let a = 0; a < elementsOfCards.classesOfElement[i].length; a++) {
				if (i === 0) {
					element.id = 'id' + meal.id;
				}
				element.classList.add(elementsOfCards.classesOfElement[i][a]);
			}

			let byClass = document.getElementsByClassName(
				elementsOfCards.parentsOfElements[i]
			);

			let parent = byClass.item(byClass.length - 1); //declares last element of collection as parent

			parent.appendChild(element);
			//EMPTY ARTICLE CREATED
		}
		let articleToFill = document.getElementById('id' + meal.id);
		articleToFill.querySelector('.meal__txt__upper__title').innerText =
			meal.name;

		articleToFill.querySelector('.meal__txt__upper__time').innerText =
			meal.time + ' min';
		//	resoudre probleme icone

		articleToFill.querySelector('.meal__txt__lower__recipe').innerText =
			meal.description;

		for (let a = 0; a < meal.ingredients.length; a++) {
			let type = document.createElement('span');
			type.classList.add('meal__txt__lower__ingredient__type');
			type.innerText = meal.ingredients[a].ingredient;
			let quantity = document.createElement('span');
			quantity.classList.add('meal__txt__lower__ingredient__qty');
			if (meal.ingredients[a].quantity !== undefined) {
				quantity.innerText = ' ' + meal.ingredients[a].quantity + ' ';
			} else {
				quantity.innerText = '';
			}

			let unit = document.createElement('span');
			unit.classList.add('meal__txt__lower__ingredient__unit');

			if (meal.ingredients[a].unit !== undefined) {
				unit.innerText = meal.ingredients[a].unit;
			} else {
				unit.innerText = '';
			}
			let target = articleToFill.querySelector('.meal__txt__lower__ingredient');

			target.appendChild(type);
			target.appendChild(quantity);
			target.appendChild(unit);

			let lineEnd = document.createElement('br');
			target.appendChild(lineEnd);
		}
	}
	returnCard() {
		//console.log(document.getElementById('id' + this.id));
		return document.getElementById('id' + this.id);
	}

	displayCard() {
		this.returnCard().style.display = 'block';
	}

	hideCard() {
		this.returnCard().style.display = 'none';
	}
	groupItems() {
		this.mealItems = [];
		//	console.log(this.appliance);
		this.mealItems.push(new ItemFactory(new Appliance(this)));

		this.ingredients.forEach((ingredient) => {
			this.mealItems.push(new ItemFactory(ingredient));
		});

		this.ustensils.forEach((ustensil) => {
			//	console.log(ustensil);
			this.mealItems.push(new Ustensil(ustensil));
		});
	}
}
