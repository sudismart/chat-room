import React, { Component } from "react";

class Messages extends Component {

  renderMsg(type, val) {
    switch (type) {
      case "image":
        return this.renderImg(val);
      case "video":
        return this.renderVideo(val);
      default:
        return this.renderText(val);
    }
  }

  renderText = val => {
    return <div className="chat chat-type-text">{val}</div>;
  };

  renderImg = val => {
    return <img className="chat chat-type-Img" src={`${val}`} alt="text" />;
  };

  renderVideo = val => {
    return (
      <video className="chat chat-type-video" width="40%" height="40%" controls>
        <source src={`${val}`} type="video/mp4" />
      </video>
    );
  };

  formatMsg = isSent => {
    const className = isSent ? "sent-msg" : "received-msg";
    return "message-container " + className;
  };

  renderAvatar = isSent => {
    if (!isSent)
      return <i className="fa fa-user-circle-o" aria-hidden="true"></i>;
  };

  renderCustomerAvatar = msg => {
    if (!msg.isSent)
      return (
        <img className="chat-avatar" src="customer_avatar.png" alt="cus_img" />
      );
  };

  renderExecutiveAvatar = msg => {
    if (msg.isSent)
      return (
        <img className="chat-avatar" src="executive_avatar.png" alt="cus_img" />
      );
  };

  render() {
    let { messages } = this.props;
    return (
      <div className="messages-container">
        {messages.map(msg => (
          <div className={this.formatMsg(msg.isSent)} key={msg.id}>
            {this.renderCustomerAvatar(msg)}
            {this.renderMsg(msg.msgType, msg.value)}
            {this.renderExecutiveAvatar(msg)}
          </div>
        ))}
      </div>
    );
  }
}

export default Messages;
