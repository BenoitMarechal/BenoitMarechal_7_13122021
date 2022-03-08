// function replaceSpaceByUnderscoreInString(string) {
// 	var reg = /[-, ]/g;
// 	return string.replace(reg, '_');
// }
function simplify(string) {
	var reg = /[-, ]/g;
	return string.replace(reg, '_').toLowerCase();
}

let elementsOfTagBtn = {
	typeOfElement: ['div', 'div', 'div', 'div'],
	classesOfElement: [
		['col', 'col-2', 'item', 'mb-1'],
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
						element.id = item.simpName;
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
			let articleToFill = document.getElementById(item.simpName);
			articleToFill
				.querySelector('.item-tag__close')
				.setAttribute('role', 'button');
			articleToFill.querySelector('.item-tag__close').innerHTML = '&#215';

			articleToFill.querySelector('.item-tag__txt').innerText = item.name;
		}
	}

	returnTagButton() {
		//	console.log(document.getElementById('id' + this.simpName));
		return document.getElementById(this.simpName);
	}

	displayTagButton() {
		this.returnTagButton().style.display = 'block';
	}

	hideTagButton() {
		this.returnTagButton().style.display = 'none';
	}
	writeDropDown() {}
	diplayDropDown() {}
	hideDropDown() {}
}

export class Ingredient extends Item {
	constructor(data) {
		super(data);
		this.name = data.ingredient;
		this.type = 'ingredient';
		this.simpName = simplify(this.name);
	}
}

export class Appliance extends Item {
	constructor(data) {
		super(data);
		this.name = data.appliance;
		this.type = 'appliance';
		this.simpName = simplify(this.name);
	}
}

export class Ustensil extends Item {
	constructor(data) {
		super(data);
		this.name = data;
		this.ustensil = data;
		this.type = 'ustensil';
		this.simpName = simplify(this.name);
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
