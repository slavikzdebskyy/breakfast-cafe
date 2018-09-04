import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Routers } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LeftToolBarComponent } from './main/left-tool-bar/left-tool-bar.component';
import { RightToolBarComponent } from './main/right-tool-bar/right-tool-bar.component';
import { NavMenuBarComponent } from './main/nav-menu-bar/nav-menu-bar.component';
import { HomeComponent } from './home/home.component';
import { FollowGalleryComponent } from './home/follow-gallery/follow-gallery.component';
import { MenuComponent } from './menu/menu.component';

import { FollowService } from './services/follow.service';
import { MenuService } from 'src/app/services/menu.service';
import { SubscribeComponent } from './subscribe/subscribe.component';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LeftToolBarComponent,
    RightToolBarComponent,
    NavMenuBarComponent,
    HomeComponent,
    FollowGalleryComponent,
    MenuComponent,
    SubscribeComponent
  ],
  imports: [
		BrowserModule,
		FontAwesomeModule,
		MatIconModule,
		BrowserAnimationsModule,
		HttpClientModule,
		RouterModule.forRoot(Routers),
  ],
  providers: [FollowService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
