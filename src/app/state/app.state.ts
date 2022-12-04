import { ActionReducerMap } from '@ngrx/store';

import { Image } from '../images-display/shared/image.model';
import { imagesReducer } from './reducers/image.reducer';

export interface AppState {
  images: ReadonlyArray<Image>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  images: imagesReducer,
};
