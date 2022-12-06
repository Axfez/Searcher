import { createReducer, on, State } from '@ngrx/store';
import { ImageModel } from 'src/app/images-display/shared/image.model';

import { ImagesActions } from '../actions/images.actions';
import { ImageState } from '../image.state';

export const initialState: ImageState = {
  imageCollection: [],
  preview: false,
};

export const imagesReducer = createReducer(
  initialState,
  on(ImagesActions.addImage, (state, { imageSaved }): ImageState => {
    // Check if it exists duplicate information into the storage
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
