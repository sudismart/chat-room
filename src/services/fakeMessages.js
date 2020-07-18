const messages = [
  { id: 12, msgType: "text", value: "Welcome..", isSent: true },
  { id: 11, msgType: "text", value: "Thank you..", isSent: false },
  { id: 10, msgType: "text", value: "Yes", isSent: false },
  {
    id: 9,
    msgType: "text",
    value: "I hope your issue is resolved..",
    isSent: true
  },
  { id: 8, msgType: "text", value: "1234", isSent: false },
  {
    id: 7,
    msgType: "text",
    value: "May I Know your CoustemID ? ",
    isSent: true
  },
  {
    id: 6,
    msgType: "video",
    value: "sample-mp4-file.mp4",
    isSent: false
  },
  {
    id: 5,
    msgType: "video",
    value: "sample-mp4-file.mp4",
    isSent: true
  },
  {
    id: 4,
    msgType: "image",
    value: "me.jpeg",
    isSent: false
  },
  {
    id: 3,
    msgType: "image",
    value: "logo512.png",
    isSent: true
  },
  { id: 2, msgType: "text", value: "Hey..", isSent: false },
  { id: 1, msgType: "text", value: "Hello Sir..", isSent: true }
];

export function getMessages() {
  return messages;
}

export function pushMessage(message) {
  if (!message.id) {
    message.id = Date.now();
    message.isSent = true;
    messages.unshift(message);
  }
  return message;
}
