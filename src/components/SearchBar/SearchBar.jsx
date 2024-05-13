import Form from "../Form/Form";
import css from "./SearchBar.module.css";
import toast, {Toaster} from "react-hot-toast";

const notify = () =>
  toast("Please, enter the text", {position: "bottom-center"});

const SearchBar = ({handleSearch}) => {
  const onSubmit = (query) => {
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
