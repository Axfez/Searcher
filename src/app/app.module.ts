import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImagesDisplayComponent } from './images-display/images-display.component';
import { ImageCardComponent } from './image-card/image-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ImagesDisplayComponent, ImageCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
