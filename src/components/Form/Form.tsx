import React from "react";
import {FiSearch} from "react-icons/fi";
import css from "./Form.module.css";
import {IFormProps} from "./Form.types";

const Form = ({handleSearch}: IFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = new FormData(e.currentTarget).get("search") as string;
    handleSearch(query);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          className={css.input}
          placeholder="Search images and photos"
          name="search"
          autoFocus
        />
      </form>
    </>
  );
};

export default Form;
