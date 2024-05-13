import React, {useEffect, useState} from "react";
import {getImages} from "../api/getImages.js";
import {IPhoto, IPhotosResponse} from "../components/App/App.types.js";

type Photos = IPhoto[] | null;

type ErrorMessage = string | null;

interface IUsePhotos {
  page: number;
  photos: Photos;
  totalPages: number;
  isLoading: boolean;
  error: ErrorMessage;
  searchPhotos: (newQuery: string) => void;
  loadMore: () => void;
}
export const usePhotos = (): IUsePhotos => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);

  const [photos, setPhotos] = useState<Photos>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorMessage>(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setError(null);
        setIsLoading(true);

        const {data} = await getImages<IPhotosResponse>(query, page);

        setPhotos((prevPhotos) =>
          prevPhotos ? [...prevPhotos, ...data.results] : data.results
        );
        setTotalPage(data.total_pages);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const searchPhotos = (newQuery: string) => {
    if (newQuery === query) return;
    setPhotos(null);
    setPage(1);
    setQuery(newQuery);
  };

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  return {
    page,
    photos,
    totalPages,
    isLoading,
    error,
    searchPhotos,
    loadMore,
  };
};
