let elementsOfFirstLine = {
	typeOfElement: ['div', 'input', 'div', 'div'],
	classesOfElement: [
		[
			'col',
			'col-2',
			//'p-0',
			'd-flex',
			'me-1',
			'rounded-top',
			'justify-content-between',
			'item-search__row__col',
		],
		[
			'item-input',
			//'w-100',
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
		// ['row', 'item-droplist'],
		// ['col', 'col-2', 'me-1', 'item-droplist__spacer', 'bg-ingredient'],
	],
	parentsOfElements: [
		'item-search__row',
		'item-search__row__col',
		'item-search__row__col',
		'item-search__row__col__arrow-container',
		// 'dropserach-container__pannel',
		// 'item-droplist',
	],
};

let elementsOfPannelStructureA = {
	typeOfElement: ['div', 'div', 'div'],
	classesOfElement: [
		['row', 'item-droplist', 'w-75', 'm-0'],
		['col', 'col-2', 'me-1', 'item-droplist__spacer'],
		['col', 'col-2', 'me-1', 'item-droplist__spacer'],
	],
	parentsOfElements: [
		'dropsearch-container__pannel',
		'item-droplist',
		'item-droplist',
	],
};

let elementsOfPannelStructureB = {
	typeOfElement: ['div', 'div'],
	classesOfElement: [
		['col', 'col-6', 'p-0', 'item-droplist__col'],
		['row', 'm-0', 'me-1', 'item-droplist__col__row'],
	],
	parentsOfElements: ['none', 'item-droplist__col'],
};

// let elementsPannelItem = {
// 	typeOfElement: ['div', 'div'],
// 	classesOfElement: [
// 		['row', 'item-droplist'],
// 		['col', 'col-2', 'me-1', 'item-droplist__spacer'],
// 		[
// 			'col',
// 			'col-2',
// 			'd-flex',
// 			'justify-content-between',
// 			'item-droplist__value',
// 		],
// 	],
// 	parentsOfElements: ['droplist-container', 'item-droplist', 'item-droplist'],
// };

export class DropDown {
	constructor(page) {
		this.page = page;
		this.writeFirstline();
		//this.writePannel();
		this.writePannel2();
		//this.fillPanel();
	}
	writeFirstline() {
		this.page.types.forEach((type) => {
			//console.log(type);
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
						element.id = 'item-search-' + type.type;
					}
					if (i < 2) {
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

			// let articleToFill = document.getElementById('item-search-' + type.type);

			// articleToFill.querySelector('.item-search__row__col__input').placeholder =
			// 	type.properName;
		});
	}

	writePannel2() {
		////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
		let mainpage = this.page;
		for (let a = 0; a < mainpage.types.length; a++) {
			//a= elements types (de 1 a 3)
			for (let b = 0; b < a + 1; b++) {
				//b= enfoncement dans le tableau (mini 1 tour, maxi 4 tours pour une div et trois spacers)
				let element = document.createElement(
					elementsOfPannelStructureA.typeOfElement[b]
				);
				if (b === 0) {
					//console.log(mainpage.types.indexOf(mainpage.types[a]));
					element.id = 'pannel-container-' + mainpage.types[a].type;
				}
				for (
					let c = 0;
					c < elementsOfPannelStructureA.classesOfElement[b].length;
					c++
				) {
					element.classList.add(
						elementsOfPannelStructureA.classesOfElement[b][c]
					);
				}

				//console.log(element);
				let byClass = document.getElementsByClassName(
					elementsOfPannelStructureA.parentsOfElements[b]
				);
				let parent = byClass.item(byClass.length - 1); //declares last element of collection as parent
				parent.appendChild(element);
			}
		}
		///BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
		for (let a = 0; a < mainpage.types.length; a++) {
			//	console.log('coucou');
			//	console.log(elementsOfPannelStructureB);
			for (
				let b = 0;
				b < elementsOfPannelStructureB.typeOfElement.length;
				b++
			) {
				let element = document.createElement(
					elementsOfPannelStructureB.typeOfElement[b]
				);
				//console.log(element);

				for (
					let c = 0;
					c < elementsOfPannelStructureB.classesOfElement[b].length;
					c++
				) {
					element.classList.add(
						elementsOfPannelStructureB.classesOfElement[b][c]
					);
				}

				//console.log(b);
				//console.log(element);
				console.log(elementsOfPannelStructureB.parentsOfElements[b]);
				let byClass = document.getElementsByClassName(
					elementsOfPannelStructureB.parentsOfElements[b]
				);
				//console.log(byClass);
				let parent = '';
				if (b === 0) {
					parent = document.getElementById(
						'pannel-container-' + mainpage.types[a].type
					);
				} else parent = byClass.item(byClass.length - 1); //declares last element of collection as parent
				//console.log(parent);
				//	console.log(element);

				parent.appendChild(element);
				//EMPTY ARTICLE CREATED
			}
		}
	}
	// fillPanel() {
	// 	let mainpage = this.page;
	// 	for (let a = 0; a < mainpage.items.length; a++) {
	// 		// for (let a = 0; a < 3; a++) {
	// 		let label = document.createElement('div');
	// 		label.classList.add('col');
	// 		label.classList.add('col-4');
	// 		label.classList.add('bg-' + mainpage.items[a].type);
	// 		label.innerText = mainpage.items[a].name;
	// 		console.log(label);
	// 		console.log(mainpage.items[a]);
	// 		let parent = document.getElementById(
	// 			'pannel-container-' + mainpage.items[a].type
	// 		);

	// 		console.log(parent);
	// 		//console.log(label);
	// 		parent.appendChild(label);
	// 	}
	// }
}
