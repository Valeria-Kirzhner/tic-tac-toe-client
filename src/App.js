import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import JoinRoomModal from "./Components/JoinRoomModal/JoinRoomModal";

const socket = io.connect("http://localhost:8000");

function App() {
  const [showModal, setShowModal] = useState(false);
  const [roomCode, setRoomCode] = useState(null);

  useEffect(() => {
    console.log(roomCode);
    if (roomCode) {
      socket.emit("joinRoom", roomCode);
    }
  }, [roomCode]);

  return (
    <>
      <JoinRoomModal
        showModal={showModal}
        setShowModal={setShowModal}
        setRoomCode={setRoomCode}
      />
      <Header />
      <Main socket={socket} roomCode={roomCode} />
      <Footer setShowModal={setShowModal} />
    </>
  );
}

export default App;
