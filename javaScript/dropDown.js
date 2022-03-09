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

//  <div class="container-fluid droplist-container"> parent principal

// 					<div class="row item-droplist">
// 						<div class="col col-2 me-1 item-droplist__spacer"></div>
// 						<div
// 							role="button"
// 							class="col col-2 d-flex justify-content-between bg-ingredient item-droplist__value"
// 						>
// 							kjkjhkjhkjh
// 						</div>

let elementsOfPannelStructure = {
	typeOfElement: ['div', 'div', 'div'],
	classesOfElement: [
		['row', 'item-droplist'],
		['col', 'col-2', 'me-1', 'item-droplist__spacer'],
		['col', 'col-2', 'me-1', 'item-droplist__spacer'],
	],
	parentsOfElements: [
		'dropsearch-container__pannel',
		'item-droplist',
		'item-droplist',
	],
};

let elementsOfPannel = {
	typeOfElement: ['div', 'div', 'div'],
	classesOfElement: [
		['row', 'item-droplist'],
		['col', 'col-2', 'me-1', 'item-droplist__spacer'],
		[
			'col',
			'col-2',
			'd-flex',
			'justify-content-between',
			'item-droplist__value',
		],
	],
	parentsOfElements: ['droplist-container', 'item-droplist', 'item-droplist'],
};

export class DropDown {
	constructor(page) {
		this.page = page;
		this.writeFirstline();
		//this.writePannel();
		this.writePannel2();
		//	this.fillPanel();
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

			let articleToFill = document.getElementById('item-search-' + type.type);

			articleToFill.querySelector('.item-search__row__col__input').placeholder =
				type.properName;
		});
	}

	writePannel() {
		let mainpage = this.page;
		//console.log(mainpage.types.length);
		for (let a = 0; a < mainpage.items.length; a++) {
			let stagg = 0;

			for (let b = 0; b < mainpage.types.length; b++) {
				if (mainpage.items[a].type === mainpage.types[b].type) {
					console.log('yes');
					stagg = b;
				}
			}
			console.log('stagg de ');
			console.log(mainpage.items[a]);
			console.log(stagg);

			///stagg found
			//////////////////////////////////////////////////////////////////

			//building divs
			for (let i = 0; i < elementsOfPannelStructure.typeOfElement.length; i++) {
				let element = document.createElement(elementsOfPannel.typeOfElement[i]);

				for (
					let c = 0;
					c < elementsOfPannelStructure.classesOfElement[i].length;
					c++
				) {
					element.classList.add(
						elementsOfPannelStructure.classesOfElement[i][c]
					);
				}

				let byClass = document.getElementsByClassName(
					elementsOfPannelStructure.parentsOfElements[i]
				);

				let parent = byClass.item(byClass.length - 1); //declares last element of collection as parent
				parent.appendChild(element);
				console.log(parent);
				//console.log(element);
			}
			//empty article created
		}

		// this.page.types.forEach((type) => {
		// 	//find stagg
		// 	//let mainpage = this.page;
		// 	//console.log(mainpage);
		// 	let stagg = 0;
		// 	for (let a = 0; a < mainpage.items.length; a++) {
		// 		for (let b = 0; b < mainpage.types.length; b++) {
		// 			if (mainpage.items[a].type === mainpage.types[b].type) {
		// 				stagg = b;
		// 				break;

		// 				//return stagg;
		// 			}
		// 		}
		// 	}
		//	console.log(type);
		//	console.log(stagg);
		// stagg found

		//generatt containers
		// for (let i = stagg + 1; i < stagg + 2; i++) {
		// 	//for (let i = 0; i < elementsOfPannelStructure.typeOfElement.length; i++) {
		// 	let element = document.createElement(
		// 		elementsOfPannelStructure.typeOfElement[i]
		// 	);

		// for (
		// 	let a = 0;
		// 	a < elementsOfPannelStructure.classesOfElement[i].length;
		// 	a++
		// ) {
		// 	if (i === 0) {
		// 		element.id = 'search-pannel-' + type.type;
		// 	}
		// 	// if (i < 2) {
		// 	// 	element.classList.add('bg-' + type.type);
		// 	// }
		// 	element.classList.add(
		// 		elementsOfPannelStructure.classesOfElement[i][a]
		// 	);
		// }

		// 	let byClass = document.getElementsByClassName(
		// 		elementsOfPannelStructure.parentsOfElements[i]
		// 	);
		// 	let parent = byClass.item(byClass.length - 1); //declares last element of collection as parent
		// 	parent.appendChild(element);
		// }
		//empty article created

		//let articleToFill = document.getElementById('search-pannel' + type.type);
		//});
	}

	writePannel2() {
		let mainpage = this.page;
		for (let a = 0; a < mainpage.types.length; a++) {
			//a= elements types (de 1 a 3)
			for (let b = 0; b < a + 1; b++) {
				//b= enfoncement dans le tableau (mini 1 tour, maxi 4 tours pour une div et trois spacers)
				let element = document.createElement(
					elementsOfPannelStructure.typeOfElement[b]
				);
				if (b === 0) {
					console.log(mainpage.types.indexOf(mainpage.types[a]));
					element.id = 'pannel-container-' + mainpage.types[a].type;
				}
				for (
					let c = 0;
					c < elementsOfPannelStructure.classesOfElement[b].length;
					c++
				) {
					element.classList.add(
						elementsOfPannelStructure.classesOfElement[b][c]
					);
				}

				console.log(element);
				let byClass = document.getElementsByClassName(
					elementsOfPannel.parentsOfElements[b]
				);
				let parent = byClass.item(byClass.length - 1); //declares last element of collection as parent
				parent.appendChild(element);
			}
		}

		// fillPanel() {
		// 	//find index
		// 	let mainpage = this.page;
		// 	console.log(mainpage);
		// 	let stagg = 0;
		// 	for (let a = 0; a < mainpage.items.length; a++) {
		// 		for (let b = 0; b < mainpage.types.length; b++) {
		// 			if (mainpage.items[a].type === mainpage.types[b].type) {
		// 				stagg = b;
		// 				break;
		// 			}
		//         }
		// 		// index found
		// 		let short = mainpage.items[a];

		// 		//console.log(short);

		// 		//building main containers
		// 		// for (let i = 0; i < mainpage.types.length; i++) {
		// 		// 	console.log(mainpage.type[i]);
		// 		// }

		// 		//building value divs
		// 		for (let i = 0; i < elementsOfPannel.typeOfElement.length; i++) {
		// 			let element = document.createElement(elementsOfPannel.typeOfElement[i]);

		// 			for (let c = 0; c < elementsOfPannel.classesOfElement[i].length; c++) {
		// 				element.classList.add(elementsOfPannel.classesOfElement[i][c]);
		// 			}

		// 			let byClass = document.getElementsByClassName(
		// 				elementsOfPannel.parentsOfElements[i]
		// 			);

		// 			//	console.log(element);
		// 			let parent = byClass.item(byClass.length - 1); //declares last element of collection as parent
		// 			parent.appendChild(element);
		// 		}
		// 		//empty article created
		// 		let allRows = document.getElementsByClassName('item-droplist');
		// 		//console.log(allRows);
		// 		//	console.log(a);
		// 		let articleToFill = allRows[a];
		// 		//articleToFill.classList.add('number_' + a);
		// 		// console.log(articleToFill);
		// 		// console.log(short);
		// 		// console.log(articleToFill.childNodes[1]);
		// 		articleToFill.childNodes[1].innerText = short.name;
		// 		articleToFill.childNodes[1].classList.add('bg-' + short.type);
		// 		articleToFill.childNodes[1].setAttribute('role', 'button');
		// 	}
		// }}}
	}
}
