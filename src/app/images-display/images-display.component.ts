import { Component } from '@angular/core';

@Component({
  selector: 'app-images-display',
  templateUrl: './images-display.component.html',
  styleUrls: ['./images-display.component.scss'],
})
export class ImagesDisplayComponent {
  images: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
}
