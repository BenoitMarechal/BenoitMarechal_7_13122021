{
	/* <div class="row item-search__row">
						<div
							class="col col-2 p-0 d-flex bg-ingredient rounded-top justify-content-between item-search__row__col"
							id="search-ingredient"
						>
							<input
								class="item-input w-100 bg-ingredient border-0 rounded item-search__row__col__input"
								placeholder="Ingrédients"
								type="text"
								id="placeholer-ingredient"
								name="name"
								required
								minlength="4"
								maxlength="8"
								size="10"
							/>
							<div
								class="arrow-container rounded-top bg-ingredient item-search__row__col__arrow-container"
							>
								<div
									class="arrow arrow-up item-search__row__col__arrow-container__arrow"
								></div>
							</div>
						</div>
					</div> */
}

let elementsOfFirstLine = {
	typeOfElement: ['div', 'input', 'div', 'div'],
	classesOfElement: [
		[
			'col',
			'col-2',
			'p-0',
			'd-flex',
			'mx-1',
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

export class DropDown {
	constructor(item) {
		//this.page = page;
		this.item = item;
		//console.log(this.type);
		this.firstline();
	}
	firstline() {
		//console.log(this.type);
		let itemType = this.item;

		for (let i = 0; i < elementsOfFirstLine.typeOfElement.length; i++) {
			let element = document.createElement(
				elementsOfFirstLine.typeOfElement[i]
			);

			for (let a = 0; a < elementsOfFirstLine.classesOfElement[i].length; a++) {
				if (i === 0) {
					element.id = 'item-search-' + itemType.simpName;
				}
				if (i < elementsOfFirstLine.typeOfElement.length - 1) {
					//	console.log('yep');
					//console.log(element);
					element.classList.add('bg-' + itemType.type);
				}
				element.classList.add(elementsOfFirstLine.classesOfElement[i][a]);
			}
			//console.log(element);

			let byClass = document.getElementsByClassName(
				elementsOfFirstLine.parentsOfElements[i]
			);
			let parent = byClass.item(byClass.length - 1); //declares last element of collection as parent
			parent.appendChild(element);
		}

		let articleToFill = document.getElementById(
			'item-search-' + itemType.simpName
		);
		//console.log(articleToFill);

		//console.log(articleToFill.querySelector('.item-search__row__col__input'));
		//console.log(itemType);
		articleToFill.querySelector('.item-search__row__col__input').placeholder =
			itemType.properName;
	}
}
