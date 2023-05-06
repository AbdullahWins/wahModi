import React, { createContext, useState } from "react";
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const AiContext = createContext();

export function openaiPlugin() {
  return {
    name: "openai",
    resolveId(source) {
      if (source === "openai") {
        return source;
      }
    },
    load(id) {
      if (id === "openai") {
        return `export default ${JSON.stringify(openai)}`;
      }
    },
  };
}

const AiProvider = ({ children }) => {
  //states
  const [modiMessages, setModiMessages] = useState([{user: false , message: "How can I help you?"},]);
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //functions
  const processRequest = async (prompt, input) => {
    console.log(prompt, input)
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}:\n\n ${input}`,
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
      setOutput(responseCorrect);
      setModiMessages([...modiMessages, {user: false , message: responseCorrect}])
    } catch (error) {
      console.log(error.message);
    }
  };

  //reset output
  const resetOutput = () => {
    const output = "";
    setOutput(output);
  };

  const aiInfo = {
    output,
    resetOutput,
    processRequest,
    isLoading,
    setIsLoading,
    modiMessages,
    setModiMessages
  };

  return <AiContext.Provider value={aiInfo}>{children}</AiContext.Provider>;
};

export default AiProvider;