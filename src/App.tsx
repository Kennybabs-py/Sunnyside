import React from "react";
import "./App.css";
import Header from "components/Header/Header";
import Landing from "pages/Landing/Landing";
import Footer from "components/Footer/Footer";

function App() {
  return (
    <main className="App">
      <Header />
      <Landing />
      <Footer />
    </main>
  );
}

export default App;
