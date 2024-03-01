import React, { useState, useEffect } from "react";
import logo from "../images/Logo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiLink } from "react-icons/hi";
import LinearProgress from "@mui/material/LinearProgress";
import clipboardCopy from "clipboard-copy";

function UrlFront() {
  const [link, setLink] = useState("");
  const [todos, setTodos] = useState([]);

  async function handeleUrl() {
    try {
      if (link.length <= 0) {
        toast.error("Coloque uma URL valida");
        return;
      }
      await axios.post("http://localhost:3000/api/link", {
        link: link,
        originalUrl: link,
      });
      toast.success("url enviada com Sucesso");
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      toast.error("Erro, Verifique os Campos");
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/link");
        setTodos(response.data.links);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="container_logo">
        <img src={logo} alt="imagem" className="Logo" />
        <h1 className="logo-name">ENCURTADOR</h1>
      </div>
      <div className="container-encurtador">
        <div className="Titulo">
          <h1 className="logo-name">Cole a URL para ser Encurtada</h1>
        </div>
        <div className="container-input">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1 } }}
            noValidate
            autoComplete="off"
            onChange={(e) => setLink(e.target.value)}
          >
            <TextField
              id="outlined-basic"
              label="URL Web"
              variant="outlined"
              className="TexTinput"
            />
          </Box>
          <button className="btn" onClick={handeleUrl}>
            Encurtar URL
          </button>
        </div>
      </div>

      {todos.length === 0 ? (
        <div>
          <div className="Titulo">
            <h1 className="logo-name"> Procurando URLS:</h1>
          </div>
          <div className="container-encurtador-two">
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          </div>
        </div>
      ) : (
        <div>
          <div className="Titulo">
            <h1 className="logo-name">Última URL Adicionada:</h1>
          </div>
          <div className="container-encurtador-two">
            <div className="icon">
              <HiLink />
            </div>
            <a
              href={todos[todos.length - 1].originalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{todos[todos.length - 1].link}</h3>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default UrlFront;
