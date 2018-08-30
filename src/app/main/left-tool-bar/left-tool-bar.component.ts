import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as fontawesome  from '@fortawesome/fontawesome-svg-core';
import { faBars, faSadTear } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-tool-bar',
  templateUrl: './left-tool-bar.component.html',
  styleUrls: ['./left-tool-bar.component.sass']
})
export class LeftToolBarComponent implements OnInit {
	
  constructor() {
		fontawesome.library.add(faBars, faSadTear); 
	}
	@Output() 
	isOpenedMenu: EventEmitter<boolean> = new EventEmitter();
	openMenu() {
		this.isOpenedMenu.emit(true);
}
  ngOnInit() { }

}
