export class	MenuItem {
	name: string;
	tastes: any[];
	price: number;
	other: string[];
	description: string;
	promo: boolean;

	constructor(name, tastes, price, other, description, promo = false) {
		this.name = name;
		this.tastes = tastes;
		this.price = price;
		this.other = other;
		this.description = description;
		this.promo = promo;
	}
}

export class Menu {
	breakfast: MenuItem[];
	cakes: MenuItem[];
	drinks: MenuItem[];
}