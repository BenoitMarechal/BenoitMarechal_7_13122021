let clockIcon = 'kjh';

export class Card {
	constructor(data) {
		this.data = data;
		//	console.log(data);
		this.elementsOfCards = {
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
				['meal__img', 'text-center', 'bg-dark'],
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
				['row', 'meal__txt__lower', 'd-flex', 'justify-content-between'],
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
		this.writeCard();
		// this.id = data.id;
		// this.name = data.name;
		// this.servings = data.servings;
		// this.ingredients = data.ingredients;
		// this.time = data.time;
		// this.description = data.description;
		// this.appliance = data.appliance;
		// this.ustensils = data.ustensils;
	}
	writeCard() {
		let meal = this;
		//	console.log(this.data.ingredients);
		for (let i = 0; i < meal.elementsOfCards.typeOfElement.length; i++) {
			let element = document.createElement(
				meal.elementsOfCards.typeOfElement[i]
			);
			for (
				let a = 0;
				a < meal.elementsOfCards.classesOfElement[i].length;
				a++
			) {
				if (i === 0) {
					element.id = 'id' + meal.data.id;
				}
				element.classList.add(meal.elementsOfCards.classesOfElement[i][a]);
			}

			let byClass = document.getElementsByClassName(
				meal.elementsOfCards.parentsOfElements[i]
			);

			let parent = byClass.item(byClass.length - 1); //declares last element of collection as parent

			parent.appendChild(element);
			//EMPTY ARTICLE CREATED
		}
		let articleToFill = document.getElementById('id' + meal.data.id);
		articleToFill.querySelector('.meal__txt__upper__title').innerText =
			meal.data.name;

		articleToFill.querySelector('.meal__txt__upper__time').innerText =
			meal.data.time + ' min';
		//	resoudre probleme icone

		// meal__txt__lower__recipe
		articleToFill.querySelector('.meal__txt__lower__recipe').innerText =
			meal.data.description;

		console.log(meal.data.ingredients);
		for (let a = 0; a < meal.data.ingredients.length; a++) {
			let type = document.createElement('span');
			type.classList.add('meal__txt__lower__ingredient__type');
			type.innerText = meal.data.ingredients[a].ingredient;
			console.log(type);
			let quantity = document.createElement('span');
			quantity.classList.add('meal__txt__lower__ingredient__qty');
			if (meal.data.ingredients[a].quantity !== undefined) {
				quantity.innerText = ' ' + meal.data.ingredients[a].quantity + ' ';
			} else {
				quantity.innerText = '';
			}
			console.log(quantity);

			let unit = document.createElement('span');
			unit.classList.add('meal__txt__lower__ingredient__unit');

			if (meal.data.ingredients[a].unit !== undefined) {
				unit.innerText = meal.data.ingredients[a].unit;
			} else {
				unit.innerText = '';
			}
			console.log(unit);
			let target = articleToFill.querySelector('.meal__txt__lower__ingredient');
			console.log(target);

			target.appendChild(type);
			target.appendChild(quantity);
			target.appendChild(unit);

			//target.appendChild('<br/>');
			let lineEnd = document.createElement('br');
			target.appendChild(lineEnd);
			// let line = type + quantity + unit + '<br/>';
			// console.log(line);
		}

		// console.log(meal.data.ingredients);
		// for (let a = 0; a < meal.data.ingredients.length; a++) {
		// 	let type = document.createElement('span');
		// 	type.classList.add('meal__txt__lower__ingredient__type');
		// 	type.innerText = meal.data.ingredients[a].ingredient;
		// 	//console.log(type);
		// }
		// for (let a = 0; a < meal.data.ingredients.length; a++) {
		// 	let quantity = document.createElement('span');
		// 	quantity.classList.add('meal__txt__lower__ingredient__qty');
		// 	quantity.innerText = meal.data.ingredients[a].quantity;
		// 	console.log(quantity);
		// }
		// for (let a = 0; a < meal.data.ingredients.length; a++) {
		// 	let unit = document.createElement('span');
		// 	unit.classList.add('meal__txt__lower__ingredient__unit');
		// 	if (meal.data.ingredients[a].unit !== undefined) {
		// 		unit.innerText = meal.data.ingredients[a].unit;
		// 	} else {
		// 		unit.innerText = '';
		// 	}
		// 	console.log(unit);
		// }
	}
}
/* <div
class="row meal__txt__upper d-flex justify-content-between"
>
<div class="col h2 col-8 meal__txt__upper__title">
	Nom du plat
</div>
<div
	class="col col-4 meal__txt__upper__time d-flex justify-content-end align-item-center"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="currentColor"
		class="bi bi-clock"
		viewBox="0 0 16 16"
	>
		<path
			d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
		/>
		<path
			d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
		/>
	</svg>
	10 min
</div>
</div>
<div
class="row meal__txt__lower d-flex justify-content-between"
>
<div class="col col-8 meal__txt__lower__ingredient">

	<span class="meal__txt__lower__ingredient__type"
		>Lait de coco:</span
	>	<span class="meal__txt__lower__ingredient__qty">400</span>
	<span class="meal__txt__lower__ingredient__unit">ml</span>
	<br />
	<span class="meal__txt__lower__ingredient__type"
		>Lait de coco:</span
	>
	<span class="meal__txt__lower__ingredient__qty">400</span>
	<span class="meal__txt__lower__ingredient__unit">ml</span>
	<br />
	<span class="meal__txt__lower__ingredient__type"
		>Lait de coco:</span
	>
	<span class="meal__txt__lower__ingredient__qty">400</span>
	<span class="meal__txt__lower__ingredient__unit">ml</span>
	<br />
</div>
<div
	class="col col-4 meal__txt__lower__recipe d-flex justify-content-end align-item-center"
>
	"Mettre les glaçons à votre goût dans le blender, ajouter le
	lait, la crème de coco, le jus de 2 citrons et le sucre.
	Mixer jusqu'à avoir la consistence désirée",
</div>

//let articleToFill = '';
// 		articleToFill = document.querySelector('.gallery__main__presentation');

// 		articleToFill.querySelector(
// 			'.gallery__main__presentation__info__name'
// 		).innerText = this.photographer.name;

// 		articleToFill.querySelector(
// 			'.gallery__main__presentation__info__location__city'
// 		).innerText = this.photographer.city + ',';
// 		articleToFill.querySelector(
// 			'.gallery__main__presentation__info__location__country'
// 		).innerText = '\u00A0' + this.photographer.country;
// 		articleToFill.querySelector(
// 			'.gallery__main__presentation__info__tagline'
// 		).innerText = this.photographer.tagline;
// 		/////////////////////////////////////////////////////
// 		this.photographer.tags.forEach((tag) => { */

// 			articleToFill
// 				.querySelector('.gallery__main__presentation__info__tags')
// 				.appendChild(utils.generateTagButtons(tag));
// 		});
// 		let allTagsBtns = document.querySelectorAll('.tag');
// 		console.log(allTagsBtns);
// 		allTagsBtns.forEach((btn) => {
// 			btn.classList.add('gallery__main__presentation__info__tags__btn');
// 		});

// 		//////////////////////////////////////////////////////////////////////
// 		articleToFill.querySelector('.gallery__main__presentation__btn').innerText =
// 			'Contactez moi';
// 		let clearedName = utils.removeSpacesInString(this.photographer.name);
// 		let path = 'images/Photographers ID Photos/' + clearedName + '.jpg';
// 		articleToFill.querySelector('.gallery__main__presentation__img').src = path;
// 		articleToFill.querySelector('.gallery__main__presentation__img').alt =
// 			this.photographer.name;
// 		//presentation filled)
