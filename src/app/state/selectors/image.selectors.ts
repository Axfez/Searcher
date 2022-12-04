import { createFeatureSelector } from '@ngrx/store';
import { Image } from 'src/app/images-display/shared/image.model';

export const selectImage =
  createFeatureSelector<ReadonlyArray<Image>>('images');
