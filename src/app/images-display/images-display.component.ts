import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ImagesService } from '../shared/services/images.service';
import { selectPreviewStatus } from '../state/selectors/image.selectors';
import { ImageModel } from './shared/image.model';

@Component({
  selector: 'app-images-display',
  templateUrl: './images-display.component.html',
  styleUrls: ['./images-display.component.scss'],
})
export class ImagesDisplayComponent implements OnInit {
  preview$: Observable<boolean> = new Observable();
  images: ImageModel[] = [];
  constructor(private http: ImagesService, private store: Store) {}

  ngOnInit(): void {
    this.http.getImages().subscribe(data => {
      this.images = data['hits'];
      this.preview$ = this.store.select(selectPreviewStatus);
    });
  }
  searchTerm(searchTerm: string) {
    this.http.searchImages(searchTerm).subscribe(data => {
      this.images = data['hits'];
      console.log(data);
    });
  }
  searchCategory(category: string) {
    this.http.searchCategory(category).subscribe(data => {
      this.images = data['hits'];
      console.log(data);
    });
  }
}
