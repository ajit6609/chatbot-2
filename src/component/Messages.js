import React from "react";
import classes from "./Messages.module.css";

const Messages = (props) => {
  const displayMessage = (message, index) => {
    if (message.speak === "user") {
      return (
        <div key={index} className={classes.messages__user}>
          <p className={classes["messages__text-user"]}>{message.text}</p>
        </div>
      );
    } else if (message.speak === "bot") {
      return (
        <div key={index} className={classes.messages__bot}>
          <p className={classes["messages__text-bot"]}>{message.text}</p>
        </div>
      );
    }
  };

  return (
    <div className={classes.messages}>
      {props.messages.map((message, index) => {
        return displayMessage(message, index);
      })}
    </div>
  );
};

export default Messages;
