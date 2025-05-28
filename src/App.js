import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center  w-100">
        <Header />
        <Container>
          <InvoiceForm />
        </Container>
      </div>
    );
  }
}

export default App;
