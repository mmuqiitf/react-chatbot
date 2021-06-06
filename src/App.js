import React, { Component } from "react";
import ChatForm from "./components/chatbot/ChatForm";
import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <Homepage></Homepage>
        <ChatForm />
      </div>
    );
  }
}

export default App;
