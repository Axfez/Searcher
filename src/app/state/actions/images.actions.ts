import { createAction, props } from '@ngrx/store';
import { Image } from 'src/app/images-display/shared/image.model';

export const addImage = createAction(
  '[Image Saved] Add Image',
  props<{ image: Image }>()
);
export const deleteImage = createAction(
  '[Image Saved] Add Image',
  props<{ image: Image }>()
);
