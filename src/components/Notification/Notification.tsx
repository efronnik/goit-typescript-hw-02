import React from "react";
import css from "./Notification.module.css";
import {INotificationProps} from "./Notification.types";

const Notification = ({children}: INotificationProps) => {
  return (
    <div className={css.container}>
      <p>{children}</p>
    </div>
  );
};

export default Notification;
