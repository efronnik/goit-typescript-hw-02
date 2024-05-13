import css from "./MainSection.module.css";

const MainSection = ({children}) => {
  return <main className={css.container}>{children}</main>;
};

export default MainSection;
