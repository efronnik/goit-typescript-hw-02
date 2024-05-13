import {IPhoto} from "../App/App.types";

export interface IImageGalleryProps {
  photos: IPhoto[];
  onModalOpen: (photo: IPhoto) => void;
}
