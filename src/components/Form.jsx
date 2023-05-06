import React, { useContext, useState } from "react";
import { AiContext } from "../contexts/AiContext";

const Form = () => {
  const [inputText, setInputText] = useState("")
  const {processRequest} = useContext(AiContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    processRequest(inputText)
    setInputText('')
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="chat-form">
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between form-content">
          <div className="input-field">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="ask me anything"
            />
          </div>
          <div className="button-feild">
            <button type="submit" className="common-btn submit-btn">
              send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
