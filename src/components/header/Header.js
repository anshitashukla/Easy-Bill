import React from "react";
import "./Header.css";

const Header = () => {
  const handleNewInvoice = () => {
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="header-title">Easy Bill</h1>
        <button
          className="btn btn-light new-invoice-btn"
          onClick={handleNewInvoice}
        >
          New Invoice
        </button>
      </div>
    </header>
  );
};

export default Header;
