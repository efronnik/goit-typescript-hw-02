import css from "./ImageCard.module.css";

const ImageCard = ({imgUrl, description, onModalOpen}) => {
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
