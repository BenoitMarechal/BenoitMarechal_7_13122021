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
		['arrow', 'arrow-down', 'item-search__row__col__arrow-container__arrow'],
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
		['row', 'm-0', 'me-1', 'item-droplist__col__row', 'hidden'],
	],
	parentsOfElements: ['none', 'item-droplist__col'],
};

export class DropDown {
	constructor(page, type) {
		this.page = page;
		this.type = type;
		this.testItem();
		// console.log(this.type);
		// console.log(this.stagg2);
		this.writeFirstline();
		this.writePannel();
		//this.hidePannel();
		this.listenMenu();
		//this.listenOpenPannel();
		this.page.test = 'kjh';
	}
	testItem() {
		let menu = this;
		let mainpage = this.page;
		//console.log(mainpage);
		let currentType = this.type;
		//console.log(currentType);
		menu.stagg2 = '';

		for (let a = 0; a < mainpage.types.length; a++) {
			//console.log(mainpage.types[a].type);
			if (mainpage.types[a].type === currentType.type) {
				//console.log('yep');
				//	console.log(a);
				menu.stagg2 = a;
			}
		}
	}

	writeFirstline() {
		let type = this.type;
		for (let i = 0; i < elementsOfFirstLine.typeOfElement.length; i++) {
			let element = document.createElement(
				elementsOfFirstLine.typeOfElement[i]
			);

			for (let a = 0; a < elementsOfFirstLine.classesOfElement[i].length; a++) {
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
		//});
	}

	writePannel() {
		////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
		let mainpage = this.page;
		let currentType = this.type;
		let stagger = this.stagg2;
		for (let b = 0; b < stagger + 1; b++) {
			let element = document.createElement(
				elementsOfPannelStructureA.typeOfElement[b]
			);
			if (b === 0) {
				element.id = 'pannel-container-' + currentType.type;
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

			let byClass = document.getElementsByClassName(
				elementsOfPannelStructureA.parentsOfElements[b]
			);
			let parent = byClass.item(byClass.length - 1); //declares last element of collection as parent
			parent.appendChild(element);
		}
		//}
		///BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
		//for (let a = 0; a < mainpage.types.length; a++) {
		for (let b = 0; b < elementsOfPannelStructureB.typeOfElement.length; b++) {
			let element = document.createElement(
				elementsOfPannelStructureB.typeOfElement[b]
			);
			if (b === elementsOfPannelStructureB.typeOfElement.length - 1) {
				element.id = 'droplist-btn-container-' + currentType.type;
				element.classList.add('bg-' + currentType.type);
			}

			for (
				let c = 0;
				c < elementsOfPannelStructureB.classesOfElement[b].length;
				c++
			) {
				element.classList.add(
					elementsOfPannelStructureB.classesOfElement[b][c]
				);
			}

			let byClass = document.getElementsByClassName(
				elementsOfPannelStructureB.parentsOfElements[b]
			);
			let parent = '';
			if (b === 0) {
				parent = document.getElementById(
					'pannel-container-' + currentType.type
				);
			} else parent = byClass.item(byClass.length - 1); //declares last element of collection as parent

			parent.appendChild(element);
			//EMPTY ARTICLE CREATED
			this.mainLine = document.getElementById('item-search-' + this.type.type);
			this.arrow = this.mainLine.querySelector(
				'.item-search__row__col__arrow-container'
			);
			this.pannel = document.getElementById(
				'droplist-btn-container-' + this.type.type
			);
		}
		//}
	}
	hidePannel() {
		this.pannel.classList.add('hidden');
	}
	displayPannel() {
		this.pannel.classList.remove('hidden');
		this.arrow.firstChild.classList.add('arrow-up');
		//this.arrow.firstChild.classList.toggle('arrow-up');
		//this.pannel.style.display = 'flex';
		//this.arrow.firstChild.classList.toggle('arrow-up');
	}
	hideShowPannel() {
		//this.pannel.style.display = 'flex';
		this.pannel.classList.toggle('hidden');
		this.arrow.firstChild.classList.toggle('arrow-up');
	}

	listenMenu() {
		let menu = this;
		//	console.log(menu.pannel);
		////click on arrow: Opens/Closes alternatively
		this.arrow.addEventListener('click', function (e) {
			console.log('click');
			menu.hideShowPannel();
		});
		////click on text area: Opens if closed, on firts click only
		this.mainLine
			.querySelector('input')
			.addEventListener('click', function (e) {
				menu.displayPannel();
			});
		/////click anywhere else
		document.addEventListener('click', function (e) {
			//console.log(e.target);
			//console.log('bg-' + menu.type.type);
			// if (menu.mainLine.contains(e.target) || menu.pannel.contains(e.target))
			if (
				e.target.classList.contains('bg-' + menu.type.type) ||
				e.target.parentNode.classList.contains('bg-' + menu.type.type) ||
				menu.arrow.contains(e.target)
			) {
				e.preventDefault();
			} else {
				menu.hidePannel();
			}
		});
		///echap
		document.addEventListener('keydown', function (e) {
			if (e.key == 'Escape') {
				menu.hidePannel();
			}
		});
	}

	// listenOpenPannel() {
	// 	let menu = this;
	// 	this.arrow.addEventListener('click', function (e) {
	// 		menu.displayPannel();
	// 	});
	// 	console.log(this.mainLine.querySelector('input'));
	// 	this.mainLine
	// 		.querySelector('input')
	// 		.addEventListener('click', function (e) {
	// 			menu.displayPannel();
	// 		});
	// }
}
