import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImagesDisplayComponent } from './images-display/images-display.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ROOT_REDUCERS } from './state/app.state';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { GetLastItemPipe } from './shared/pipes/get-last-item.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImagesDisplayComponent,
    ImageCardComponent,
    ImagePreviewComponent,
    GetLastItemPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
