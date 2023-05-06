import React, { useState, useEffect } from "react";
import openai from "openai";
import { AiContext } from "../contexts/AiContext";

function ChatBot() {
  
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const promptAI = async (text) => {
    const prompt = `The following is a conversation with an AI assistant. The assistant helps with a variety of tasks, including answering questions, making recommendations, and providing assistance with various tasks. \n\nUser: ${text}\nAI: `;
    const completions = await openai.complete({
      engine: "davinci",
      prompt,
      maxTokens: 150,
      n: 1,
      stop: "\n",
    });
    const message = completions.choices[0].text.trim();
    return message;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await promptAI(input);
    setMessages([...messages, { user: input, ai: response }]);
    setInput("");
  };

  useEffect(() => {
    async function getAi() {
      await openai.apiKey(process.env.REACT_APP_OPENAI_API_KEY);
    }
    getAi();
  }, []);

  return (
    <AiContext.Provider value={{}}>
      <h1>OpenAI Chatbot</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index}>
            <div>{message.user}</div>
            <div>{message.ai}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </AiContext.Provider>
  );
}

export default ChatBot;