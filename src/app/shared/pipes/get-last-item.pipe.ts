import { Pipe, PipeTransform } from '@angular/core';

import { ImageModel } from 'src/app/images-display/shared/image.model';

// Custom filter to obtain last item of the storage and render it on image-preview
@Pipe({ name: 'getLastItem' })
export class GetLastItemPipe implements PipeTransform {
  transform(items: ReadonlyArray<ImageModel>) {
    return items.at(-1);
  }
}
