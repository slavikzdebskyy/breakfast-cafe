import { FollowUs } from "src/app/models/follow.model";
import { Injectable } from "@angular/core";

@Injectable()
export class FollowService {
	private gallery: FollowUs[] = [
		new FollowUs('follow-us-1.jpg', 2, []),
		new FollowUs('follow-us-2.jpg', 0, []),
		new FollowUs('follow-us-3.jpg', 2, []),
		new FollowUs('follow-us-4.jpg', 2, []),
		new FollowUs('follow-us-5.jpg', 5, []),
		new FollowUs('follow-us-6.jpg', 2, ['Nice!', 'Delicios!', 'Good morning, Big City!']),
		new FollowUs('follow-us-7.jpg', 2, []),
		new FollowUs('follow-us-8.jpg', 2, []),
		new FollowUs('follow-us-9.jpg', 4, []),
		new FollowUs('follow-us-10.jpg', 2, []),
		new FollowUs('follow-us-11.jpg', 2, []),
		new FollowUs('follow-us-12.jpg', 2, [])		
	]

	getGallery (): FollowUs[] {
		return this.gallery;
	}

	addNewMessage (index: number, message: string): void {
		this.gallery[index].messages.push(message);
	}

	likeIt (index: number): void {
		this.gallery[index].likes += 1;
	}

}