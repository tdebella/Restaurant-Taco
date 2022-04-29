import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
