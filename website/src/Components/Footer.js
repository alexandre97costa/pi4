import React from "react";
import { Link } from "react-router-dom";

import CardBackground from "./CardBackground";

export default function Footer() {
  return (
    <CardBackground className="border-0 bg-primary shadow rounded-4 rounded-bottom mt-5 w-100">
      <footer className="d-flex justify-content-between align-items-center flex-row w-100 px-5">

      <div className="d-flex flex-column g-2 pt-3 pb-4">
          <Link to="/contactos" className="text-light text-decoration-none">
            <u>Contactos</u>
          </Link>
          <Link
            to="/termos-utilizacao"
            className="text-light text-decoration-none pt-3"
          >
            <u>Termos de Utilização</u>
          </Link>
          <Link
            to="/politicas-privacidade"
            className="text-light text-decoration-none pt-3"
          >
            <u>Política de privacidade</u>
          </Link>
        </div>
        
        <div className="align-self-end text-center text-light text-decoration-none">
          <p>cMyApp2022 Todos os direitos reservados</p>
        </div>

        <div className="">
          <Link
            to="https://www.youtube.com/?reload=9&hl=pt-PT&gl=PT"
            className="btn btn-outline-light bi bi-facebook me-md-3"
          ></Link>
          <Link
            to="/"
            className="btn btn-outline-light bi bi-instagram me-md-3"
          ></Link>
          <Link
            to="/"
            className="btn btn-outline-light bi bi-twitter me-md-3"
          ></Link>
        </div>
      </footer>
    </CardBackground>
  );
}
