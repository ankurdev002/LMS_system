import { useContext, useEffect, useState } from "react";
import Layout from "../../../Components/Layout/Layout";
import { DataContext } from "../../../Context/Context";

const Message = () => {
  const { response, setResponse } = useContext(DataContext);
  const [inputMessage, setInputMessage] = useState("");
  const [activeButton, setActiveButton] = useState("DEV RTJS");
  const [activeButtonMessages, setActiveButtonMessages] = useState([]);

  const buttons = ["DEV RTJS", "DEV RTNT", "DEV FLUT", "DEV C", "DEV LEAD"];
  const str = "developer_....";

  useEffect(() => {
    const messagesForButton = response.filter(
      (item) => item.button === activeButton
    );
    setActiveButtonMessages(messagesForButton);
  }, [activeButton]);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  function formatTimestamp(timestamp) {
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  }

  function setChat() {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        message: inputMessage,
        timestamp: new Date(),
        button: activeButton,
      };
      setActiveButtonMessages((prev) => [...prev, newMessage]);
      setResponse((prev) => [...prev, newMessage]);
      setInputMessage(""); // Clear the input field
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setChat(); // Call setChat when Enter is pressed
    }
  }

  return (
    <Layout>
      <div className="message-container">
        <div className="chat-nav-bar">
          <div className="nav-heading-subject">
            {str.split("").map((item, index) => (
              <span
                className={item == "_" && "gap-text"}
                key={index}
                style={{ "--i": index }}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="nav-suffle">
            {buttons.map((buttonText, index) => (
              <button
                key={index}
                className={`btn-message-nav ${
                  activeButton === buttonText ? "active-chat-msg" : ""
                }`}
                onClick={() => handleButtonClick(buttonText)}
              >
                {buttonText}
              </button>
            ))}
          </div>
        </div>
        <div className="show-chat-response">
          {activeButtonMessages
            .slice(0)
            .reverse()
            .map((item, index) => (
              <div key={index} className="responses-time-msg">
                <p className="message-info">{item.message}</p>
                <p className="time-info">{formatTimestamp(item.timestamp)}</p>
              </div>
            ))}
        </div>
        <div className="input-chat">
          <input
            type="text"
            name="chat"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
          />
          <button className="btn-send-mail" onClick={() => setChat()}>
            <span>Send Message</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="myGradient23"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" style={{ stopColor: "#f5f7fa" }} />
                  <stop offset="100%" style={{ stopColor: "#a3badf" }} />
                </linearGradient>
              </defs>
              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            </svg>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Message;
