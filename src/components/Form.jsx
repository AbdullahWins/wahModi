import React, { useContext, useState } from "react";
import { AiContext } from "../contexts/AiContext";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const {processRequest} = useContext(AiContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call your OpenAI API here using the inputText state
    processRequest('act like a pronstar named jonny sins and give advice about', "how to join porn industry")
    console.log("Input text: ", inputText);
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
              placeholder="ask me anything"
              value={inputText}
              onChange={handleInputChange}
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
