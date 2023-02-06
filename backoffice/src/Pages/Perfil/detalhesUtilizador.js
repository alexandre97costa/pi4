import React, { useEffect, useState } from "react";
import axios from "axios";
import auth from "../../Auth/auth.service";
import CardUtilizadorDetails from "../../Components/Cards/CardUtilizadoresDetails";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ip = process.env.REACT_APP_IP;

export default function DetalhesUtilizador() {
  const [utilizadores, setUtilizadores] = useState([]);

  useEffect(() => {
    axiosGetUtilizador();
  }, []);

  async function axiosGetUtilizador() {
    const url = ip + "/utilizador/" + auth.getUser().id;

    await axios
      .get(url, auth.header())
      .then((output) => {
        console.log(output.data.data);
        setUtilizadores(output.data?.data ?? []);
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.response.data.msg);
        console.error(error);
      });
  }

  return (
    <>
      <div className="row gy-4">
        <div className="col-12 col-md-9">
          <CardUtilizadorDetails info={utilizadores} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
