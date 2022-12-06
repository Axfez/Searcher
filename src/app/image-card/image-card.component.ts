import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ImageModel } from '../images-display/shared/image.model';
import { ImagesActions } from '../state/actions/images.actions';
import { selectPreviewStatus } from '../state/selectors/image.selectors';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  visibility: boolean = false;
  preview$: Observable<boolean> = new Observable();

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.preview$ = this.store.select(selectPreviewStatus);
  }

  @Input() image: ImageModel;

  // Check hover on Image for display info and dispatch data to storage
  onVisibility() {
    if (this.visibility) {
      this.visibility = false;
    } else {
      this.visibility = true;
    }
  }
  // Check click on Image to show image preview
  onPreview(image: ImageModel) {
    if (this.preview$) {
      this.store.dispatch(ImagesActions.addImage({ imageSaved: image }));
    } else {
      this.preview$;
    }
  }
}
