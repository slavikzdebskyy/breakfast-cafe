import { Component, OnInit } from '@angular/core';
import * as fontawesome  from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-right-tool-bar',
  templateUrl: './right-tool-bar.component.html',
  styleUrls: ['./right-tool-bar.component.sass']
})
export class RightToolBarComponent implements OnInit {

  constructor() { 
		fontawesome.library.add(faInstagram, faTwitter, faFacebookF);
	}
	
  ngOnInit() {
  }

}
