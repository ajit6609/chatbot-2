import React, { useEffect, useState } from "react";
import classes from "./Entity.module.css";
import { useSelector } from "react-redux";

const Entity = () => {
  const messages = useSelector((state) => state.chatbot.messages);

  const [enObject, updateEn] = useState([]);

  console.log(messages);

  const handleCross = (event, key) => {
    const filteredObjects = enObject.filter((object, index) => index !== key);

    updateEn(filteredObjects);
  };

  useEffect(() => {
    if (messages[0] && messages[0].entities !== null) {
      updateEn(messages[0].entities);
    }
  }, [messages]);

  return (
    <div className={classes.entityCard}>
      {enObject.map((eachEntity, index) => {
        console.log(eachEntity);
        return (
          <div key={index} className={classes.entity}>
            <p className={classes.entityValue}>{eachEntity.value}</p>
            <p className={classes.entityType}>{eachEntity.type}</p>
            <button
              onClick={(event) => handleCross(event, index)}
              className={classes.crossBtn}
            >
              &#10006;
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Entity;
