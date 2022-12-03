import React from "react";

export default function PrivacidadeCoockiesMicrosite(props) {

  /*const [titulo, setTitulo] = useState("")
  /*onChange={(value)=>setTitulo(value.target.value)}*/

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <div className="row mt-3">
            <div className="col-12 ">
              <label htmlFor="formLinkTextoInput" className="form-label mb-2 ">
                {props.linkTexto}
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10">
            <input 
              type="text"
              className="form-control  mb-4"
              id="formLinkTextoPlaceholderInput"
              placeholder={props.linkTextoPlaceholder}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-outline-warning bi bi-pencil-fill me-md-3"></button>
            <button className=" btn btn-outline-danger bi bi-trash-fill"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
