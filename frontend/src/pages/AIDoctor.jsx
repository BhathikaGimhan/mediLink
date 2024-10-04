import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";

function AIDoctor() {
  const [history, setHistory] = useState([
    {
      role: "user",
      parts: [
        {
          text: "If you are asked about a minor illness, ask the user about the symptoms you need and give the medicine related to it. Remember that you are only giving medicine for minor ailments",
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "Hello I'm AI Doctor. How can I help you today?" }],
    },
  ]);
  const [response, setResponse] = useState("");
  const [input, setInput] = useState(""); // To capture user input

  // Function to handle sending a new message
  const handleSendMessage = async () => {
    try {
      const genAI = new GoogleGenerativeAI(
        "AIzaSyBhtwZ7D1H9w6iAg31HcO2CankgOh5dsHk"
      );
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Add the user's message to the history
      const updatedHistory = [
        ...history,
        {
          role: "user",
          parts: [{ text: input }],
        },
      ];
      setHistory(updatedHistory); // Update local history

      const chat = model.startChat({ history: updatedHistory });

      const result = await chat.sendMessage(input); // Send user input as message
      const text = await result.response.text(); // Await the model's response

      // Add the AI model's response to the history
      setHistory([
        ...history,
        {
          role: "user",
          parts: [{ text: input }],
        },
        {
          role: "model",
          parts: [{ text }],
        },
      ]);
      console.log(text);
      setInput(""); // Clear the input field after sending the message
      setResponse(text); // Update the UI with the latest response
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="chat-view w-full h-screen mt-10 flex justify-center items-center">
      <div className="chat-body w-full h-full m-10 flex justify-center items-center rounded-3xl shadow-animate relative">
        <div className="chat w-full h-full flex bg-[#202024] text-white rounded-3xl m-10 z-10">
          <div className="w-96 flex flex-col justify-between my-10 ml-10 rounded-3xl border-[#ffffff48] p-2 text-center bg-[#161616] border shadow-sm ">
            <div className="selection-box p-5 rounded-lg shadow-md">
              <div className="text-xl font-semibold">AI Doctor</div>
              <div className="text-gray-500 mb-5">Chat with AI Doctor</div>

              {/* Custom Checkbox for AI Doctor */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="ai-doctor"
                  className="w-6 h-6 accent-blue-500 rounded-lg focus:ring-2 focus:ring-blue-300 cursor-pointer transition duration-300"
                />
                <label
                  htmlFor="ai-doctor"
                  className="ml-3 text-lg font-medium text-gray-700 cursor-pointer"
                >
                  Nearest Doctor
                </label>
              </div>

              {/* Custom Checkbox for Nearest Pharmacy */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="nearest-pharmacy"
                  className="w-6 h-6 accent-blue-500 rounded-lg focus:ring-2 focus:ring-blue-300 cursor-pointer transition duration-300"
                />
                <label
                  htmlFor="nearest-pharmacy"
                  className="ml-3 text-lg font-medium text-gray-700 cursor-pointer"
                >
                  Nearest Pharmacy
                </label>
              </div>
            </div>

            <div className="chats-hostory w-full h-96 border-y border-[#ffffff48] bg-[#161616] flex flex-col rounded-2xl p-5">
              <h3 className="text-xl font-semibold  my-5">Chat History</h3>
              <div className="chat flex flex-col gap-4 mx-1 h-full overflow-y-auto transition-all duration-300 ease-in-out">
                <div className="date py-2 bg-gray-900 hover:bg-gray-800 flex items-center justify-around rounded-full gap-2 ">
                  <div className="history-icon w-5 h-5 rounded-full bg-blue-700"></div>
                  2024-9-20 Test
                </div>
                <div className="date py-2 bg-gray-900 hover:bg-gray-800 flex items-center justify-around rounded-full gap-2 ">
                  <div className="history-icon w-5 h-5 rounded-full bg-blue-700"></div>
                  2024-9-20 Test
                </div>
                <div className="date py-2 bg-gray-900 hover:bg-gray-800 flex items-center justify-around rounded-full gap-2 ">
                  <div className="history-icon w-5 h-5 rounded-full bg-blue-700"></div>
                  2024-9-20 Test
                </div>
                <div className="date py-2 bg-gray-900 hover:bg-gray-800 flex items-center justify-around rounded-full gap-2 ">
                  <div className="history-icon w-5 h-5 rounded-full bg-blue-700"></div>
                  2024-9-20 Test
                </div>
                <div className="date py-2 bg-gray-900 hover:bg-gray-800 flex items-center justify-around rounded-full gap-2 ">
                  <div className="history-icon w-5 h-5 rounded-full bg-blue-700"></div>
                  2024-9-20 Test
                </div>
                <div className="date py-2 bg-gray-900 hover:bg-gray-800 flex items-center justify-around rounded-full gap-2 ">
                  <div className="history-icon w-5 h-5 rounded-full bg-blue-700"></div>
                  2024-9-20 Test
                </div>
                <div className="date py-2 bg-gray-900 hover:bg-gray-800 flex items-center justify-around rounded-full gap-2 ">
                  <div className="history-icon w-5 h-5 rounded-full bg-blue-700"></div>
                  2024-9-20 Test
                </div>
                <div className="date py-2 bg-gray-900 hover:bg-gray-800 flex items-center justify-around rounded-full gap-2 ">
                  <div className="history-icon w-5 h-5 rounded-full bg-blue-700"></div>
                  2024-9-20 Test
                </div>
                <div className="date py-2 bg-gray-900 hover:bg-gray-800 flex items-center justify-around rounded-full gap-2 ">
                  <div className="history-icon w-5 h-5 rounded-full bg-blue-700"></div>
                  2024-9-20 Test
                </div>
                <div className="date py-2 bg-gray-900 hover:bg-gray-800 flex items-center justify-around rounded-full gap-2 ">
                  <div className="history-icon w-5 h-5 rounded-full bg-blue-700"></div>
                  2024-9-20 Test
                </div>
                <div className="date py-2 bg-gray-900 hover:bg-gray-800 flex items-center justify-around rounded-full gap-2 ">
                  <div className="history-icon w-5 h-5 rounded-full bg-blue-700"></div>
                  2024-9-20 Test
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col m-10 rounded-3xl">
            <div className="chat-view flex w-full h-full rounded-t-3xl  relative border-x border-t border-[#ffffff48] overflow-y-auto">
              <div className="ai-chat px-10 pt-10 flex w-full flex-col space-y-4">
                {/* Map through the chat history and display each message */}
                {history
                  .filter(
                    (message) =>
                      message.parts[0].text !==
                      "If you are asked about a minor illness, ask the user about the symptoms you need and give the medicine related to it. Remember that you are only giving medicine for minor ailments"
                  )
                  .map((message, index) => (
                    <div
                      key={index}
                      className={`${
                        message.role === "user"
                          ? "user-chat self-end bg-gray-700"
                          : "ai-model-chat self-start bg-blue-500"
                      } p-4 max-w-[80%] rounded-lg shadow-lg`}
                    >
                      <div className="ai-chat-text text-lg text-white">
                        <ReactMarkdown>{message.parts[0].text}</ReactMarkdown>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="chat-input flex w-full h-20 rounded-b-3xl border bg-[#303030] border-[#ffffff48]">
              <input
                type="text"
                className="w-full bg-transparent ml-4 border-none outline-none text-white"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-gray-600 hover:bg-blue-500 ml-3 w-20 rounded-br-3xl"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIDoctor;
