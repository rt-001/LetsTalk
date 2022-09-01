import "./App.css";
import { Button } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/chats" element={<Chatpage></Chatpage>} />
      </Routes>
    </div>
  );
}

export default App;
