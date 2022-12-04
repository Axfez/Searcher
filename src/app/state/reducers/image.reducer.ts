import { createReducer, on } from '@ngrx/store';
import { Image } from 'src/app/images-display/shared/image.model';
import { addImage, deleteImage } from '../actions/images.actions';

export const initialState: ReadonlyArray<Image> = [];

export const imagesReducer = createReducer(
  initialState,
  on(addImage, (state, { image }): ReadonlyArray<Image> => {
    if (state.indexOf(image) > -1) return state;
    return [...state, image];
  })
);
