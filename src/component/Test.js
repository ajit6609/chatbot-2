import React, { useState, useEffect, useCallback } from "react";
import classes from "./Messages.module.css";
import reactStringReplace from "react-string-replace";
import { useSelector } from "react-redux";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

const Messages = (props) => {
  const messages = useSelector((state) => state.chatbot.messages);
  const [activeBot, setBot] = useState("");
  const [dspText, updateDsptext] = useState([1, 2]);

  // let dsptext;
  // let botMsg;
  // const displayMessage = useCallback(() => {
  //   updateDsptext(() => {
  //     return dsptext;
  //   });
  //   console.log(dspText);

  //   dsptext = botMsg;

  // function removespan(entity) {
  //   console.log(dsptext);
  //   // updateDsptext(message.text);
  //   // console.log(dspText);
  //   for (let i = 0; i < dsptext.length; i++) {
  //     if (
  //       dsptext[i].type === "span" &&
  //       dsptext[i].props.children[0] === entity.match
  //     ) {
  //       dsptext[i] = entity.match;
  //     }
  //   }
  //   console.log(dsptext);
  // }

  // if (message.entities) {
  //   message.entities.forEach((entity) => {
  //     if (message.text.toLowerCase().includes(entity.value.toLowerCase())) {
  //       dsptext = reactStringReplace(dsptext, entity.value, (match) => (
  //         <span className={classes.rpltext}>
  //           {match}
  //           <span className={classes.entitytype}>
  //             {entity.type}
  //             <button
  //               className={classes.entityButton}
  //               onClick={() => removespan({ match })}
  //             >
  //               x
  //             </button>
  //           </span>
  //         </span>
  //       ));
  //       console.log(dsptext);
  //     }
  // }
  //   );
  // }

  // return (
  //   <div key={index} className={classes.messages__bot}>
  //     <p className={classes["messages__text-bot"]}>{dsptext}</p>
  //   </div>
  // );
  // }, [dspText, dsptext, botMsg]);
  // useEffect(() => {
  //   activeBot.speak === "bot"
  //     ? updateDsptext([1, 2, 3])
  //     : console.log(activeBot);
  // }, [activeBot]);

  return (
    <div className={classes.messages}>
      {messages.map((message, index) => {
        if (message.speak === "user") {
          console.log(index);

          return (
            <div key={index} className={classes.messages__user}>
              <p className={classes["messages__text-user"]}>{message.text}</p>
            </div>
          );
        } else if (message.speak === "bot") {
          message.speak === "bot" ? setBot(message) : console.log(message);
          return "";
        } else return "";
      })}
    </div>
  );
};

export default Messages;
