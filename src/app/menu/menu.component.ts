import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

	menu: Menu;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
		this.menu = this.menuService.getMenu();
  }

}
