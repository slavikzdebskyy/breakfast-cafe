import { Component, OnInit } from '@angular/core';
import { FollowService } from '../services/follow.service';
import { FollowUs } from '../models/follow.model';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	followGallery: FollowUs[];
	isWarningVisible: boolean = true;
	
	constructor(private followService: FollowService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
			'message',
			sanitizer.bypassSecurityTrustResourceUrl('assets/message.svg'));
		iconRegistry.addSvgIcon(
			'like',
			sanitizer.bypassSecurityTrustResourceUrl('assets/like.svg'));
			iconRegistry.addSvgIcon(
        'x-mark',
        sanitizer.bypassSecurityTrustResourceUrl('assets/x-mark-thin.svg'));
	
	}

  ngOnInit() {
		this.followGallery = this.followService.getGallery();		
  }
	warning() {
		this.isWarningVisible = false
	}
}
