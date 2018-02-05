import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">404</h1>
      <Link to="/" className="button">
        Voltar
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
