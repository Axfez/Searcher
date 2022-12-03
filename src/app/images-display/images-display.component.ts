import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../shared/services/images.service';
import { Image } from './shared/image.model';

@Component({
  selector: 'app-images-display',
  templateUrl: './images-display.component.html',
  styleUrls: ['./images-display.component.scss'],
})
export class ImagesDisplayComponent implements OnInit {
  images: Image[] = [];
  constructor(private http: ImagesService) {}
  ngOnInit(): void {
    this.http.getImages().subscribe(data => {
      this.images = data['hits'];
      console.log(data);
    });
  }
}
