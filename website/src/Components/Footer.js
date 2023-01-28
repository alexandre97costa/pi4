import React from "react";
import { Link } from "react-router-dom";

import CardBackground from "./CardBackground";

export default function Footer() {
  return (
    <CardBackground className="border-0 bg-primary shadow rounded-4 rounded-bottom mt-5 w-100">
      <footer className="row pt-5">
        <div className="col-3 ps-5">
          <Link to="/contactos" className="text-light text-decoration-none">
            Contactos
          </Link>
          <br></br>
          <div className="pt-3">
            <Link
              to="https://www.youtube.com/?reload=9&hl=pt-PT&gl=PT"
              className="btn btn-outline-light bi bi-facebook me-md-3">
              </Link>
            <Link
              to="/"
              className="btn btn-outline-light bi bi-instagram me-md-3">
              </Link>
            <Link
              to="/"
              className="btn btn-outline-light bi bi-twitter me-md-3">
              </Link>
          </div>
        </div>

        <div className="col-6 pb-3">
          <Link to="/termos-utilizacao" className="text-light text-decoration-none">
            Termos de Utilização
          </Link>
          <br />
          <div className="pt-2">
            <Link
              to="/politicas-privacidade"
              className="text-light text-decoration-none"
            >
              Política de privacidade
            </Link>
          </div>
        </div>

        <div className="col-12 pt-5 text-center text-light text-decoration-none">
          <p>cMyApp2022 Todos os direitos reservados</p>
        </div>
      </footer>
    </CardBackground>
  );
}
