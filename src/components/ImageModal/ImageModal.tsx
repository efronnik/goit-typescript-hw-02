import css from "./ImageModal.module.css";
import {IoIosClose} from "react-icons/io";
import {AiOutlineLike} from "react-icons/ai";
import {MdDownload} from "react-icons/md";
import {formattingData} from "../../helpers/formattingDate.js";
import {modalStyles} from "../../utils/modalStyles.js";
import Modal from "react-modal";
import {IImageModalProps} from "./ImageModal.types";

Modal.setAppElement("#root");

const ImageModal = ({modalIsOpen, photo, closeModal}: IImageModalProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      closeTimeoutMS={100}>
      {photo && (
        <div className={css.modal}>
          <button
            className={css.closeBtn}
            onClick={closeModal}
            aria-label="close modal">
            <IoIosClose />
          </button>
          <img src={photo.urls.regular} alt={photo.alt_description} />
          <div className={css.content}>
            <p>Updated: {formattingData(photo.updated_at)}</p>
            <div className={css.wrapper}>
              <a
                className={css.download}
                href={photo.links.download}
                download="MyFile.pdf">
                <MdDownload />
              </a>
              <div className={css.like}>
                <AiOutlineLike />
                <span>{photo.likes}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
