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


import { FollowService } from './services/follow.service';
import { FollowGalleryComponent } from './home/follow-gallery/follow-gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LeftToolBarComponent,
    RightToolBarComponent,
    NavMenuBarComponent,
    HomeComponent,
    FollowGalleryComponent
  ],
  imports: [
		BrowserModule,
		FontAwesomeModule,
		MatIconModule,
		BrowserAnimationsModule,
		HttpClientModule,
		RouterModule.forRoot(Routers),
  ],
  providers: [FollowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
