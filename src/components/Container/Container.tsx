import css from "./Container.module.css";
import {IContainer} from "./Container.types";

const Container = ({children}: IContainer) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
