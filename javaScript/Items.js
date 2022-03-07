let elementsOfTagBtn = {
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

export class Item {
	constructor(data) {
		this.ingredient = data.ingredient;
		this.appliance = data.appliance;
		this.ustensil = data.ustensil;
		this.type = '';
		this.name = '';
	}
}

export class Ingredient extends Item {
	constructor(data) {
		super(data);
		this.name = data.ingredient;
		this.type = 'ingredient';
	}
}

export class Appliance extends Item {
	constructor(data) {
		super(data);
		this.name = data.appliance;
		this.type = 'appliance';
	}
}

export class Ustensil extends Item {
	constructor(data) {
		super(data);
		this.name = data;
		this.ustensil = data;
		this.type = 'ustensil';
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
