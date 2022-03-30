let elementsOfFirstLine = {
	typeOfElement: ['div', 'input', 'div', 'div'],
	classesOfElement: [
		[
			'col',
			'col-12',
			'd-flex',
			'me-1',
			'rounded-top',
			'justify-content-between',
			'item-search__row__col',
			'col-lg-2',
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
	],
	parentsOfElements: [
		'item-search__row',
		'item-search__row__col',
		'item-search__row__col',
		'item-search__row__col__arrow-container',
	],
};

let elementsOfPannelStructureA = {
	typeOfElement: ['div', 'div', 'div'],
	classesOfElement: [
		['row', 'item-droplist', 'w-75', 'm-0'],
		['col', 'col-12', 'col-lg-2', 'me-1', 'item-droplist__spacer'],
		['col', 'col-12', 'col-lg-2', 'me-1', 'item-droplist__spacer'],
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
		this.writeFirstline();
		this.writePannel();
		this.listenMenu();
	}
	testItem() {
		let menu = this;
		let mainpage = this.page;
		let currentType = this.type;
		menu.stagg = '';
		for (let a = 0; a < mainpage.types.length; a++) {
			if (mainpage.types[a].type === currentType.type) {
				menu.stagg = a;
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
			let parent = byClass.item(byClass.length - 1);
			//declares last element of collection as parent
			parent.appendChild(element);
		}
		//empty article created
		let articleToFill = document.getElementById('item-search-' + type.type);
		articleToFill.querySelector('.item-search__row__col__input').placeholder =
			type.properName;
	}

	writePannel() {
		//Structure A
		let currentType = this.type;
		let stagger = this.stagg;
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
		//Structure B
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
		this.arrow.firstChild.classList.remove('arrow-up');
	}
	displayPannel() {
		this.pannel.classList.remove('hidden');
		this.arrow.firstChild.classList.add('arrow-up');
	}
	hideShowPannel() {
		this.pannel.classList.toggle('hidden');
		this.arrow.firstChild.classList.toggle('arrow-up');
	}

	listenMenu() {
		let menu = this;
		//click on arrow: Opens/Closes alternatively
		this.arrow.addEventListener('click', function (e) {
			menu.hideShowPannel();
		});
		//click on text area: Opens if closed, on fisrt click only
		this.mainLine
			.querySelector('input')
			.addEventListener('click', function (e) {
				menu.displayPannel();
			});
		//click anywhere else
		document.addEventListener('click', function (e) {
			if (e.target.parentNode === document) {
				menu.hidePannel();
			} else if (
				e.target.classList.contains('bg-' + menu.type.type) ||
				e.target.parentNode.classList.contains('bg-' + menu.type.type) ||
				menu.arrow.contains(e.target)
			) {
				e.preventDefault();
			} else {
				menu.hidePannel();
			}
		});
		//echap key
		document.addEventListener('keydown', function (e) {
			if (e.key == 'Escape') {
				menu.hidePannel();
			}
		});
	}
}
