export class FollowUs {
	image: string;
	likes: number;
	messages: string[];

	constructor (image, likes, messages) {
		this.image = image;
		this.likes = likes;
		this.messages = messages;
	}
}