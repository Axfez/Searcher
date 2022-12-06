import { createReducer, on } from '@ngrx/store';

import { ImagesActions } from '../actions/images.actions';
import { ImageState } from '../image.state';

export const initialState: ImageState = {
  imageCollection: [],
  preview: false,
};

export const imagesReducer = createReducer(
  initialState,
  on(ImagesActions.addImage, (state, { imageSaved }): ImageState => {
    return {
      ...state,
      imageCollection: [...state.imageCollection, imageSaved],
      preview: true,
    };
  }),
  on(ImagesActions.previewImage, (state): ImageState => {
    return { ...state, preview: false };
  })
);
