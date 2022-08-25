import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Chatpage() {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data);
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      <div>
        {chats.map((chat) => (
          <div>{chat.chatName}</div>
        ))}
      </div>
    </>
  );
}

export default Chatpage;
