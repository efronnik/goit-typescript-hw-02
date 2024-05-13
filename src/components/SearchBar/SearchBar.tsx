import Form from "../Form/Form";
import css from "./SearchBar.module.css";
import toast, {Toaster} from "react-hot-toast";
import {ISearchBarProps} from "./SearchBar.types";
const notify = () =>
  toast("Please, enter the text", {position: "bottom-center"});

const SearchBar = ({handleSearch}: ISearchBarProps) => {
  const onSubmit = (query: string) => {
    const newQuery = query.trim();
    if (!newQuery) {
      notify();
      return;
    }
    handleSearch(newQuery);
  };

  return (
    <header className={css.search}>
      <Form handleSearch={onSubmit} />
      <Toaster />
    </header>
  );
};

export default SearchBar;
