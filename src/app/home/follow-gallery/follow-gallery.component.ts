import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/services/follow.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FollowUs } from '../../models/follow.model';

@Component({
  selector: 'app-follow-gallery',
  templateUrl: './follow-gallery.component.html',
  styleUrls: ['./follow-gallery.component.sass']
})
export class FollowGalleryComponent implements OnInit {

	constructor(private followService: FollowService,
							private route: ActivatedRoute,
											iconRegistry: MatIconRegistry,
											sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
			'right',
			sanitizer.bypassSecurityTrustResourceUrl('assets/right.svg'));
		iconRegistry.addSvgIcon(
			'left',
			sanitizer.bypassSecurityTrustResourceUrl('assets/left.svg'));
		iconRegistry.addSvgIcon(
			'message',
			sanitizer.bypassSecurityTrustResourceUrl('assets/message.svg'));
		iconRegistry.addSvgIcon(
			'like',
			sanitizer.bypassSecurityTrustResourceUrl('assets/like.svg'));
			iconRegistry.addSvgIcon(
				'x-mark-bold',
				sanitizer.bypassSecurityTrustResourceUrl('assets/x-mark-bold.svg'));
	}

	index: number;
	gallery: FollowUs[];

  ngOnInit() {
		if(this.route.snapshot.params['index']){
			this.index = parseInt(this.route.snapshot.params['index']);
		} else {
			this.index = 0;
		}	
	this.gallery = this.followService.getGallery();
	}
	
	nextPrevSlide (next) {
		let nextIndex = this.index + next;
		if(nextIndex >= this.gallery.length){
			this.index = 0;
		} else {
			if(nextIndex < 0) {
				this.index = this.gallery.length - 1;
			} else {
				this.index = nextIndex;
			}
		}
	}

}
