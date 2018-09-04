import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu-bar',
  templateUrl: './nav-menu-bar.component.html',
	styleUrls: ['./nav-menu-bar.component.sass']	
})
export class NavMenuBarComponent {

	constructor(iconRegistry: MatIconRegistry, 
							sanitizer: DomSanitizer,
							private router: Router) {
    iconRegistry.addSvgIcon(
        'x-mark',
        sanitizer.bypassSecurityTrustResourceUrl('assets/x-mark-thin.svg'));
	}
	
	state: string = 'open';
	isOpenedMenu: boolean = false;
	containerClass: string = 'nav-menu-container'
	
	closeMenu () {
		this.containerClass = 'nav-menu-container close';
		setTimeout(()=>{
			this.isOpenedMenu = false;
		}, 750);		
	}

	getIsOpenedMenuValue (event) {
		this.isOpenedMenu = event;
		this.containerClass = 'nav-menu-container open';
	}

	home () {
		this.closeMenu();
		this.router.navigate(['/home']);
	}

	menu () {
		this.closeMenu();
		this.router.navigate(['/our-menu']);
	}
}
