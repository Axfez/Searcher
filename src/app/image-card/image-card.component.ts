import { Component } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent {
  visibility: boolean = false;

  onPreview() {
    if (this.visibility) {
      this.visibility = false;
    } else {
      this.visibility = true;
    }
    console.log(this.visibility);
  }
}
