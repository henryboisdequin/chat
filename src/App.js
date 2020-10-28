import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { ChatRoom } from "./components/ChatRoom";
import { SignIn } from "./components/SignIn";
import { SignOut } from "./components/SignOut";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Realtime Chat App</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
