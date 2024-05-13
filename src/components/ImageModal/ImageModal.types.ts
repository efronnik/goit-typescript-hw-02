import {IPhoto} from "../App/App.types";

export interface IImageModalProps {
  modalIsOpen: boolean;
  photo: IPhoto;
  closeModal: () => void;
}
