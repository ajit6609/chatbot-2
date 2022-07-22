import React, { useState, useEffect, useCallback } from "react";
import classes from "./Messages.module.css";
import reactStringReplace from "react-string-replace";
import { useSelector } from "react-redux";

const Messages = (props) => {
  const messages = useSelector((state) => state.chatbot.messages);

  const [dspText, updateDsptext] = useState([]);

  const displayMessage = useCallback(
    (message, index) => {
      console.log(message);
      if (message.speak === "user") {
        console.log(index);

        return (
          <div key={index} className={classes.messages__user}>
            <p className={classes["messages__text-user"]}>{message.text}</p>
          </div>
        );
      } else if (message.speak === "bot") {
        console.log(index);

        let dsptext = message.text;

        function removespan(entity) {
          // const theSpan = document.getElementById("test");
          // console.log(theSpan.innerHTML);
          // theSpan.getParent().removeChild(theSpan);
          console.log(dsptext);
          updateDsptext(message.text);
          console.log(dspText);
          for (let i = 0; i < dsptext.length; i++) {
            if (
              dsptext[i].type === "span" &&
              dsptext[i].props.children[0] === entity.match
            ) {
              dsptext[i] = entity.match;
            }
          }
          console.log(dsptext);
          // const i = dsptext.indexOf(theSpan);
          // console.log("index is=", i);
        }

        if (message.entities) {
          message.entities.forEach((entity) => {
            if (
              message.text.toLowerCase().includes(entity.value.toLowerCase())
            ) {
              dsptext = reactStringReplace(dsptext, entity.value, (match) => (
                <span className={classes.rpltext}>
                  {match}
                  <span className={classes.entitytype}>
                    {entity.type}
                    <button
                      className={classes.entityButton}
                      onClick={() => removespan({ match })}
                    >
                      x
                    </button>
                  </span>
                </span>
              ));
              // console.log(dsptext);
            }
          });
        }

        return (
          <div key={index} className={classes.messages__bot}>
            <p className={classes["messages__text-bot"]}>{dsptext}</p>
          </div>
        );
      }
    },
    [dspText]
  );

  useEffect(() => {
    displayMessage();
  }, [dspText, displayMessage]);

  return (
    <div className={classes.messages}>
      {messages.map((message, index) => {
        return displayMessage(message, index);
      })}
    </div>
  );
};

export default Messages;
