import css from "./ImageCard.module.css";
import {IImageCardProps} from "./ImageCard.types";

const ImageCard = ({imgUrl, description, onModalOpen}: IImageCardProps) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        loading="lazy"
        src={imgUrl}
        alt={description}
        onClick={onModalOpen}
      />
    </div>
  );
};

export default ImageCard;
