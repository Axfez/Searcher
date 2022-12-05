import { ImageModel } from '../images-display/shared/image.model';

export interface ImageState {
  imageCollection: ReadonlyArray<ImageModel>;
  preview: boolean;
}
