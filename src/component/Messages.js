import React, { useState } from "react";
import classes from "./Messages.module.css";
import reactStringReplace from "react-string-replace";
import { useSelector } from "react-redux";

const Messages = (props) => {
  // const [buttonText, setbuttonText] = useState(false);

  const messages = useSelector((state) => state.chatbot.messages);

  const displayMessage = (message, index) => {
    if (message.speak === "user") {
      return (
        <div key={index} className={classes.messages__user}>
          <p className={classes["messages__text-user"]}>{message.text}</p>
        </div>
      );
    } else if (message.speak === "bot") {
      let dsptext = message.text;

      if (message.entities) {
        message.entities.map((entity) => {
          if (message.text.toLowerCase().includes(entity.value.toLowerCase())) {
            dsptext = reactStringReplace(dsptext, entity.value, (match, i) => (
              <span key={i} className={classes.rpltext}>
                {match}
                <span className={classes.entitytype}>
                  {entity.type}
                  <button className={classes.entityButton}>x</button>
                </span>
              </span>
            ));
            console.log(dsptext);
          }
          return;
        });
      }

      return (
        <div key={index} className={classes.messages__bot}>
          <p className={classes["messages__text-bot"]}>{dsptext}</p>
        </div>
      );
    }
  };

  return (
    <div className={classes.messages}>
      {messages.map((message, index) => {
        return displayMessage(message, index);
      })}
    </div>
  );
};

export default Messages;
