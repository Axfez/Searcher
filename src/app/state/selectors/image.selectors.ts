import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import { ImageState } from '../image.state';

export const selectImageFeature = (state: AppState) => state.imagesState;

export const selectPreviewStatus = createSelector(
  selectImageFeature,
  (state: ImageState) => state.preview
);
export const selectImageData = createSelector(
  selectImageFeature,
  (state: ImageState) => state.imageCollection
);
