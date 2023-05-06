import React, { createContext, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const AiContext = createContext();

const AiProvider = ({ children }) => {
  // states
  const [modiMessages, setModiMessages] = useState([
    { user: false, message: "How can I help you?" },
  ]);
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // functions
  const processRequest = async (input) => {
    const newModiMessages = [
      ...modiMessages,
      { user: true, message: input },
    ];
    setModiMessages(newModiMessages);

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Act as India's Prime Minister Narendra Modi and reply to the following message:\n\n ${input}`,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });

      if (response.status === 200) {
        setIsLoading(false);
      }

      const responseCorrect = response?.data?.choices[0]?.text;
      const newResponseMessages = [
        ...newModiMessages,
        { user: false, message: responseCorrect },
      ];

      setOutput(responseCorrect);
      setModiMessages(newResponseMessages);
    } catch (error) {
      console.log(error.message);
    }
  };

  // reset output
  const resetOutput = () => {
    setOutput("");
  };

  const aiInfo = {
    output,
    resetOutput,
    processRequest,
    isLoading,
    setIsLoading,
    modiMessages,
    setModiMessages,
  };

  return <AiContext.Provider value={aiInfo}>{children}</AiContext.Provider>;
};

export default AiProvider;
