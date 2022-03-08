let elementsOfFirstLine = {
	typeOfElement: ['div', 'input', 'div', 'div'],
	classesOfElement: [
		[
			'col',
			'col-2',
			'p-0',
			'd-flex',
			'me-1',
			'rounded-top',
			'justify-content-between',
			'item-search__row__col',
		],
		[
			'item-input',
			'w-100',
			'border-0',
			'rounded',
			'item-search__row__col__input',
		],
		[
			'arrow-container',
			'rounded-top',
			'item-search__row__col__arrow-container',
		],
		['arrow', 'arrow-up', 'item-search__row__col__arrow-container__arrow'],
	],
	parentsOfElements: [
		'item-search__row',
		'item-search__row__col',
		'item-search__row__col',
		'item-search__row__col__arrow-container',
	],
};

let elementsOfPanel = {
	typeOfElement: ['div', 'div'],
	classesOfElement: [
		['row', 'item-droplist', 'droplist-container__row'],
		[
			'col',
			'col-2',
			'd-flex',
			'justify-content-between',
			'droplist-container__row__col',
		],
	],
	parentsOfElements: ['droplist-container', 'droplist-container__row'],
};
{
}

export class DropDown {
	constructor(page) {
		this.page = page;
		//this.item = item;
		//console.log(this.type);
		this.firstline();
		//this.fillPanel();
	}
	firstline() {
		//console.log(this.type);

		this.page.types.forEach(
			(type) => {
				console.log(type);
				for (let i = 0; i < elementsOfFirstLine.typeOfElement.length; i++) {
					let element = document.createElement(
						elementsOfFirstLine.typeOfElement[i]
					);

					for (
						let a = 0;
						a < elementsOfFirstLine.classesOfElement[i].length;
						a++
					) {
						if (i === 0) {
							element.id = 'item-search-' + type.simpName;
						}
						if (i < elementsOfFirstLine.typeOfElement.length - 1) {
							element.classList.add('bg-' + type.type);
						}
						element.classList.add(elementsOfFirstLine.classesOfElement[i][a]);
					}

					let byClass = document.getElementsByClassName(
						elementsOfFirstLine.parentsOfElements[i]
					);
					let parent = byClass.item(byClass.length - 1); //declares last element of collection as parent
					parent.appendChild(element);
				}
				//empty article created

				let articleToFill = document.getElementById(
					'item-search-' + type.simpName
				);

				articleToFill.querySelector(
					'.item-search__row__col__input'
				).placeholder = type.properName;
			}

			// let itemType = this.item;
		);
	}

	fillPanel() {
		//find index
		let panel = this;
		let index = '';
		//	console.log(panel.page);
		//	console.log(panel.item);
		for (let i = 0; i < panel.page.types.length; i++) {
			console.log(i);
			console.log(panel.page.types[i].type);
		}

		// for (let i = 0; i < elementsOfFirstLine.typeOfElement.length; i++) {
		// 	let element = document.createElement(
		// 		elementsOfFirstLine.typeOfElement[i]
		// 	);

		// 	for (let a = 0; a < elementsOfFirstLine.classesOfElement[i].length; a++) {
		// 		if (i === 0) {
		// 			element.id = 'item-search-' + itemType.simpName;
		// 		}
		// 		if (i < elementsOfFirstLine.typeOfElement.length - 1) {
		// 			element.classList.add('bg-' + itemType.type);
		// 		}
		// 		element.classList.add(elementsOfFirstLine.classesOfElement[i][a]);
		// 	}

		// 	let byClass = document.getElementsByClassName(
		// 		elementsOfFirstLine.parentsOfElements[i]
		// 	);
		// 	let parent = byClass.item(byClass.length - 1); //declares last element of collection as parent
		// 	parent.appendChild(element);
		// }
	}
}
