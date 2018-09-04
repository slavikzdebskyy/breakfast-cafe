import { HomeComponent } from "./home/home.component";
import { FollowGalleryComponent } from "./home/follow-gallery/follow-gallery.component";
import { MenuComponent } from "./menu/menu.component";

export const Routers = [
	{path: 'home', component: HomeComponent},
	{path: '', component: HomeComponent},
	{path: 'gallery', component: FollowGalleryComponent},
	{path: 'gallery/:index', component: FollowGalleryComponent},
	{path: 'our-menu', component: MenuComponent}
]