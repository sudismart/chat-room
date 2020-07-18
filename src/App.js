import React, { Component } from "react";
import "./App.css";
import Messages from "./components/messages";
import UserInput from "./components/userInput";
import "bootstrap/dist/css/bootstrap.css";
import { getMessages } from "./services/fakeMessages.js";

class App extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    /* api call for fetch messages */
    this.setState({ messages: getMessages() });
  }

  pushMessage = message => {
    const messages = [...this.state.messages];
    if (!message.id) {
      message.id = Date.now();
      message.isSent = true;
      messages.unshift(message);
    }
    this.setState({ messages });
  };

  render() {
    var { messages } = this.state;
    return (
      <div className="App container">
        <div className="chat-container">
          <h2 className="chat-header one-edge-shadow">Chat Room</h2>
          <Messages messages={messages} />
          <UserInput messages={messages} pushMessage={this.pushMessage} />
        </div>
      </div>
    );
  }
}

export default App;
