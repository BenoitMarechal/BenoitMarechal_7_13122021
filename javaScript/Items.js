export function simplify(string) {
	var reg = /[-,', ]/g;
	return string.replace(reg, '_').toLowerCase();
}

let elementsOfTagBtn = {
	typeOfElement: ['div', 'div', 'div', 'div'],
	classesOfElement: [
		[
			'col',
			'col-12',
			'col-sm-6',
			'col-md-4',
			'col-lg-3',
			'item',
			'mb-1',
			//'hidden',
		],
		[
			'item-tag',
			'rounded',
			'd-flex',
			'justify-content-between',
			'align-item-center',
		],
		['item-tag__txt', 'text-truncate', 'mx-2'],
		['item-tag__close', 'mx-2'],
	],
	parentsOfElements: ['', 'item', 'item-tag', 'item-tag'],
};

export class Item {
	constructor(data) {
		this.ingredient = data.ingredient;
		this.appliance = data.appliance;
		this.ustensil = data.ustensil;
		this.type = '';
		this.name = '';
	}
	writeTagButton() {
		{
			let item = this;
			//console.log(item.type);
			//console.log(this);
			for (let i = 0; i < elementsOfTagBtn.typeOfElement.length; i++) {
				let element = document.createElement(elementsOfTagBtn.typeOfElement[i]);
				for (let a = 0; a < elementsOfTagBtn.classesOfElement[i].length; a++) {
					if (i === 0) {
						element.id = 'tag-' + item.simpName;
					}
					if (i === 1) {
						//	console.log('yep');
						//console.log(element);
						element.classList.add('bg-' + item.type);
					}
					element.classList.add(elementsOfTagBtn.classesOfElement[i][a]);
				}

				let byClass = document.getElementsByClassName(
					elementsOfTagBtn.parentsOfElements[i]
				);
				let parent = '';
				if (i === 0) {
					parent = document.getElementById('item-tag__container');
				} else parent = byClass.item(byClass.length - 1); //declares last element of collection as parent
				//console.log(parent);
				//	console.log(element);

				parent.appendChild(element);
				//EMPTY ARTICLE CREATED
			}
			let articleToFill = document.getElementById('tag-' + item.simpName);
			articleToFill
				.querySelector('.item-tag__close')
				.setAttribute('role', 'button');
			articleToFill.querySelector('.item-tag__close').innerHTML = '&#215';

			articleToFill.querySelector('.item-tag__txt').innerText = item.name;
		}
	}
	writeDropDownButton() {
		let currentItem = this;
		//for (let a = 0; a < mainpage.items.length; a++) {
		let label = document.createElement('div');
		label.classList.add('col');
		label.classList.add('col-4');
		label.innerText = this.name;
		label.id = 'drop-btn-' + this.simpName;
		label.setAttribute('role', 'button');
		let parent = document.getElementById('droplist-btn-container-' + this.type);
		parent.appendChild(label);
		//}
	}

	returnTagButton() {
		//	console.log(document.getElementById('tag-' + this.simpName));
		return document.getElementById('tag-' + this.simpName);
	}

	displayTagButton() {
		this.returnTagButton().style.display = 'block';
	}

	hideTagButton() {
		this.returnTagButton().style.display = 'none';
	}

	returnDropDown() {
		//	console.log(document.getElementById('drop-btn-' + this.simpName));
		return document.getElementById('drop-btn-' + this.simpName);
	}
	diplayDropDown() {
		if (this.returnTagButton().style.display === 'none') {
			this.returnDropDown().style.display = 'block';
		}
	}
	hideDropDown() {
		this.returnDropDown().style.display = 'none';
	}
	selectOn() {
		this.displayTagButton();
		this.hideDropDown();
	}
	selectOff() {
		//console.log('jhg');
		this.hideTagButton();
		this.diplayDropDown();
	}
	listenToTag() {
		let item = this;
		this.returnTagButton()
			.querySelector('.item-tag__close')
			.addEventListener('click', function (e) {
				console.log(this);
				item.selectOff();
			});
	}
	listenToDrop() {
		let item = this;
		//console.log(item.returnTagButton());
		item.returnDropDown().addEventListener('click', function (e) {
			console.log('click');
			item.selectOn();
		});
	}
}

export class Ingredient extends Item {
	constructor(data) {
		super(data);
		this.name = data.ingredient;
		this.type = 'ingredient';
		this.simpName = simplify(this.name);
		this.properName = 'Ingrédients';
	}
}

export class Appliance extends Item {
	constructor(data) {
		super(data);
		this.name = data.appliance;
		this.type = 'appliance';
		this.simpName = simplify(this.name);
		this.properName = 'Appareils';
	}
}

export class Ustensil extends Item {
	constructor(data) {
		super(data);
		this.name = data;
		this.ustensil = data;
		this.type = 'ustensil';
		this.simpName = simplify(this.name);
		this.properName = 'Ustensiles';
	}
}

export class ItemFactory {
	constructor(data) {
		if (data.ingredient !== undefined) {
			return new Ingredient(data);
		}
		if (data.appliance !== undefined) {
			return new Appliance(data);
		}
		if (data.ustensil !== undefined) {
			return new Ustensil(data);
		} else {
			throw 'unknown format';
		}
	}
}
