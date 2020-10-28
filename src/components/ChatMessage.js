import { auth } from "../firebase";

export function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL ||
            `https://robohash.org/${Math.floor(Math.random() * 10)}?200x200`
          }
          alt=""
        />
        <p>{text}</p>
      </div>
    </>
  );
}
