import css from "./ErrorMessage.module.css";
import {IErrorMessageProps} from "./ErrorMessage.types";

const ErrorMessage = ({message}: IErrorMessageProps) => {
  return (
    <div className={css.container}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
