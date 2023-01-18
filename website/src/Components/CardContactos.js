import React, { useEffect } from "react";

export default function CardTermos(props) {
  return (
    <>
      <div className="text-center">
        <h1>Contactos</h1>
        <div className="pt-3">
          <p className="w-50 mx-auto">
            Deixe aqui a sua mensagem e os seus contactos, prometemos ser breves
            com a sua resposta. Obrigado por nos contactar.
          </p>
        </div>
        <form className="mx-auto w-75 pt-5">
          <div className="form-floating mb-4">
            <input
              id="input-nome"
              type="text"
              className="p-3 w-75 rounded-3 form-border-primary"
              placeholder="Nome Completo"
            />
          </div>
          <div className="form-floating mb-4">
            <input
              id="input-email"
              type="text"
              className="p-3 w-75 rounded-3 form-border-primary"
              placeholder="E-mail"
            />
          </div>
          <div className="form-floating mb-4">
            <textarea
              id="input-text"
              type="text"
              className="p-3 w-75 rounded-3 form-border-primary imput-lg"
              placeholder="Texto..."
              rows="6"
            />
          </div>
          <button
            id="btn-submit"
            type="submit"
            className="btn btn-lg btn-primary shadow mb-4"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
