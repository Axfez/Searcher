import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { ImageModel } from 'src/app/images-display/shared/image.model';

export const ImagesActions = createActionGroup({
  source: 'Images',
  events: {
    'Add Image': props<{ imageSaved: ImageModel }>(),
    'Preview Image': emptyProps(),
  },
});
