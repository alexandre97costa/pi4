import React, { useState, useEffect } from "react";

export default function Botao(props) {

  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch("/APK/MyGreenTrip.apk")
      .then((response) => response.blob())
      .then((blob) => setFile(URL.createObjectURL(blob)));
  }, []);


  return (
    <button
      style={props.style}
      onClick={() => {
        if (file) {
          const link = document.createElement("a");
          link.href = file;
          link.download = "MyGreenTrip.apk";
          document.body.appendChild(link);
          link.click();
        }
      }}
      className={changeClassName()}
    >
      {props.texto}
    </button>
  );


  function changeClassName() {
    if (!props.className) return "btn btn-primary btn-lg";
    return "btn " + props.className;
  }

}