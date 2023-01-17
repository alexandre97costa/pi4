import React from "react";
import { Link } from "react-router-dom";

import CardBackground from "./CardBackground";

export default function Footer() {
  return (
    <CardBackground className="border-0 bg-primary shadow rounded-4 rounded-bottom mt-5 w-100">
      <footer className="row pt-5">

        <div className="col-3 ps-5">
          <p className="text-light">Contactos</p>
          <Link to="https://www.youtube.com/?reload=9&hl=pt-PT&gl=PT" className="btn btn-outline-light bi bi-facebook me-md-3" />
          <Link to="/" className="btn btn-outline-light bi bi-instagram me-md-3" />
          <Link to="/" className="btn btn-outline-light bi bi-twitter me-md-3" />
        </div>

        <div className="col-6 pb-3">
          <Link to="/" className="stretched-link text-light">Termos de Utilização</Link> <br />
          <Link to="/" className="stretched-link text-light">Política de privacidade</Link>
        </div>

        <div className="col-12 pt-5 text-center text-light">
          <p>cMyApp2022 Todos os direitos reservados</p>
        </div>
      </footer>
    </CardBackground>
  );
}
