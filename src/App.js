import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import io from "socket.io-client";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
