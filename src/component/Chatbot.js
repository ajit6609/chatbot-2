import React, { useState } from "react";
import classes from "./Chatbot.module.css";
import { MdSend, MdOutlineClose } from "react-icons/md";
import Messages from "./Messages";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");

  const textQuery = (text) => {
    const response = {
      speak: "bot",
      text: text,
    };
    forwardMessage(response);
    console.log("response", response);
  };

  const handleUserQuery = () => {
    console.log("query", query);
    if (query === "") {
      alert("please enter a valid query");
      return;
    }
    const data = {
      speak: "user",
      text: query,
    };
    forwardMessage(data);
    textQuery(query);
    setQuery("");
  };

  const forwardMessage = (data) => {
    console.log("data", data);
    let message = data;

    setMessages((prev) => {
      return [...prev, message];
    });
  };

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={classes.chatbot}>
      <div className={classes.chatbot__header}>
        <h1 className={classes["chatbot__header--text"]}>Jarvis</h1>
        <button className={classes["chatbot__header--btn"]}>
          <MdOutlineClose size="2rem" />
        </button>
      </div>

      <div className={classes.chatbot__body}>
        <Messages messages={messages} />
      </div>
      <div className={classes.chatbot__footer}>
        <input
          className={classes["chatbot__footer--input"]}
          type="text"
          placeholder="Type here..."
          value={query}
          onChange={queryChangeHandler}
        />
        <button
          className={classes["chatbot__footer--btn"]}
          onClick={handleUserQuery}
        >
          <MdSend size="1.5rem" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
