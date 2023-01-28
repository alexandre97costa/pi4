import React from "react";
import { Link } from "react-router-dom";

export default function BotaoVoltar(props) {
  return (
    <div className="ps-5 black">
      <Link to="/" className="bi bi-arrow-left icon-voltar"></Link>
    </div>
  );
}
