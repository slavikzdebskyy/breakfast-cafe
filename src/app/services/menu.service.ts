import { Menu, MenuItem } from "../models/menu.model";

export class MenuService {
	private menu: Menu = {
		breakfast: [
			new MenuItem('Granola', [], 9, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Overnight Oats', [], 9, ['VEGAN'],'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Superfood bowl', [], 9, [],'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Continental Breakfast', [], 9, [],'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Avocado Toast', [], 9, ['VEGETARIAN', 'ORGANIC'],'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Spinach Brioche', [], 9, [],'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Eggs Benedict', [], 9, [],'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Bacon & Eggs', [], 9, [],'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Smoked Salmon Bagel', [], 9, [],'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Bakery Basket', [], 9, ['VEGAN'],'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.', true),
			new MenuItem('Pancakes', [{name:'Banana nut', price: 9}, {name:'Blueberry', price: 9}, {name:'Chocolate', price: 9}], 0, [],'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.', true)
		],
		cakes: [
			new MenuItem('Apple Pie', [], 9, ['VEGETARIAN', 'ORGANIC'], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.', true),
			new MenuItem('Cheese Cake', [{name:'300 gr', price: 3}, {name:'400 gr', price: 5}], 0, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Croissant', [{name:'Plain', price: 9}, {name:'Pistachio', price: 9}, {name:'Almond', price: 9}, {name:'Ham & Cheese', price: 9}], 0, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Muffin', [{name:'Banana', price: 9}, {name:'Blueberry', price: 9}, {name:'Pumpkin', price: 9}], 0, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Scones', [], 9, ['VEGAN'], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.')			
		],
		drinks: [
			new MenuItem('Coffee', [{name:'Filter', price: 9}, {name:'Espresso', price: 9}, {name:'Homemade Juices', price: 9}, {name:'Tea', price: 9}], 0, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
			new MenuItem('Cocktails', [{name:'Campari', price: 9}, {name:'Orange Juice', price: 9}, {name:'Mimosa', price: 9}, {name:'Kir Royale', price: 9}, {name:'Bloody Mary', price: 9}], 0, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
		]

	}

	getMenu (): Menu {
		return this.menu;
	}
}