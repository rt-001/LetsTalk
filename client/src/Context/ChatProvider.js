import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pic, setPic] = useState([]);
  const navigate = useNavigate();
  // const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    (async function runEffect() {
      const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
      console.log(userInfo, "api call");
      if (userInfo !== undefined) {
        // console.log(userInfo.name);
        setName(userInfo.name);
        setEmail(userInfo.email);
        setPic(userInfo.pic);
        setUser(userInfo);
      } else {
        navigate("/");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        name,
        email,
        setUser,
        notification,
        setNotification,
        chats,
        pic,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
