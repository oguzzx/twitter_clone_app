import React, { useState } from "react";
import Container from "./components/layout/Container";
import Content from "./components/layout/Content";
import Sidebar from "./components/layout/Sidebar";
import Widgets from "./components/layout/Widgets";
import "./index.css";
function App() {
  const [content, setContent] = useState("");
  const [tweets, setTweets] = useState([]);

  const sendTweet = () => {
    setTweets([content, ...tweets]);
    setContent("");
  };

  const deleteTweet = (index) => {
    setTweets(tweets.filter((tweet) => tweet !== index));
  };

  return (
    <Container>
      <Sidebar />
      <Content
        content={content}
        setContent={setContent}
        sendTweet={sendTweet}
        tweets={tweets}
        deleteTweet={deleteTweet}
      />
      <Widgets />
    </Container>
  );
}

export default App;