import React, { Component } from "react";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserInput extends Component {
  state = {
    autoFocus: true
  };

  onChangeHandler = e => {
    let newFile = e.target.files[0];
    this.props.pushMessage({
      msgType: newFile.type.split("/")[0],
      value: newFile.name
    });
  };

  textEnter = e => {
    if (e.which === 13) {
      this.props.pushMessage({
        msgType: "text",
        value: e.target.value
      });
      e.target.value = "";
    }
  };

  render() {
    return (
      <div className="user-input-section">
        <div className="text-section">
          <input
            type="text"
            placeholder="Type a message..."
            onKeyPress={this.textEnter}
            autoFocus={this.state.autoFocus}
          />
        </div>
        <div className="attachment-section">
          <label htmlFor="attachment">
            <FontAwesomeIcon icon={faPaperclip} size="lg" />
          </label>
          <input id="attachment" type="file" onChange={this.onChangeHandler} />
        </div>
      </div>
    );
  }
}

export default UserInput;
