import css from "./Notification.module.css";

const Notification = ({children}) => {
  return (
    <div className={css.container}>
      <p>{children}</p>
    </div>
  );
};

export default Notification;
