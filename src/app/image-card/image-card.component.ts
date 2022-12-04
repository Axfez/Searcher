import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Image } from '../images-display/shared/image.model';
import { addImage } from '../state/actions/images.actions';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent {
  visibility: boolean = false;

  constructor(private store: Store) {}
  @Input() image: Image;

  // Check click on Image for display info and dispatch data to store
  onPreview(image: Image) {
    if (this.visibility) {
      this.visibility = false;
    } else {
      this.visibility = true;
      this.store.dispatch(addImage({ image: image }));
    }
  }
}
