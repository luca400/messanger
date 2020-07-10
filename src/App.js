import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "SERVER", message: "Welcome to Predoi's family chat app" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    //run on load
    db.collection("Messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    //Logic for sending message
    event.preventDefault();

    db.collection("Messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="App">
      <div className="Title">
        <h1>Predoi Messanger App</h1>
        <h2>Hello, {username}</h2>
      </div>
      <br />
      <br />
      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
      <br />

      <form className="form">
        <FormControl>
          <InputLabel>Message Luca!</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="input"
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
          onClick={sendMessage}
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default App;
