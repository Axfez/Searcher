import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ImagesActions } from '../state/actions/images.actions';
import { selectImageData } from '../state/selectors/image.selectors';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss'],
})
export class ImagePreviewComponent implements OnInit {
  image$: Observable<any> = new Observable();
  constructor(private store: Store) {}
  ngOnInit() {
    this.image$ = this.store.select(selectImageData);
    console.log(this.image$);
  }
  onClosePreview() {
    this.store.dispatch(ImagesActions.previewImage());
    console.log(this.image$);
  }
}
