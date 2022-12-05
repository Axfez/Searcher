import { ActionReducerMap } from '@ngrx/store';

import { ImageState } from './image.state';
import { imagesReducer } from './reducers/image.reducer';

export interface AppState {
  imagesState: ImageState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  imagesState: imagesReducer,
};
