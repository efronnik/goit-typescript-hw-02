import {useState} from "react";

import css from "./App.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Container from "../Container/Container";
import MainSection from "../MainSection/MainSection";
import Notification from "../Notification/Notification";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {usePhotos} from "../../hooks/usePhotos.js";
import {IPhoto} from "./App.types";

function App() {
  const {page, photos, totalPages, isLoading, error, searchPhotos, loadMore} =
    usePhotos();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<IPhoto | null>(null);

  const onModalOpen = (photo: IPhoto) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
    document.body.classList.add("modal-open");
  };

  const onModalClose = () => {
    setIsOpen(false);
    document.body.classList.remove("modal-open");
  };

  const isShowBtn = Boolean(photos?.length && !isLoading && page < totalPages);

  return (
    <Container>
      <SearchBar handleSearch={searchPhotos} />
      <MainSection>
        {photos && <ImageGallery photos={photos} onModalOpen={onModalOpen} />}
        {photos?.length === 0 && (
          <Notification>No image and photo are found</Notification>
        )}
        {error && <ErrorMessage message={error} />}
        {isLoading && <Loader />}

        {isShowBtn && (
          <div className={css.btnWrapper}>
            <LoadMoreBtn onLoadMore={loadMore}>Load More</LoadMoreBtn>
          </div>
        )}
      </MainSection>
      {selectedPhoto && (
        <ImageModal
          photo={selectedPhoto}
          closeModal={onModalClose}
          modalIsOpen={modalIsOpen}
        />
      )}
    </Container>
  );
}

export default App;
