import React, { useContext, useState } from "react";
import { AiContext } from "../contexts/AiContext";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const { processRequest } = useContext(AiContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    processRequest(inputText);
    setInputText("");
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="chat-form">
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between gap-1 gap-sm-2 gap-md-3">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="ask me anything"
            style={{ flex: "1" }}
            className="text-field"
          />
          <button type="submit" className="common-btn submit-btn">
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
