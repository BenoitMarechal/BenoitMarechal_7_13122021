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
		//	articleToFill.querySelector('.meal__txt__upper__time').innerHTML =
	}
}

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
// 		this.photographer.tags.forEach((tag) => {
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
// 		//presentation filled
