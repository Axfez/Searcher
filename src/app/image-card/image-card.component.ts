import { Component, Input } from '@angular/core';
import { Image } from '../images-display/shared/image.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent {
  visibility: boolean = false;
  @Input() image: Image;

  // Check click on Image for display info and dispatch data to store
  onPreview() {
    if (this.visibility) {
      this.visibility = false;
    } else {
      this.visibility = true;
    }
  }
}
