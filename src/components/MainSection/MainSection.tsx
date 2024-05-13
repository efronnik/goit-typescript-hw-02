import css from "./MainSection.module.css";
import {IMainSectionProps} from "./MainSection.types";

const MainSection = ({children}: IMainSectionProps) => {
  return <main className={css.container}>{children}</main>;
};

export default MainSection;
