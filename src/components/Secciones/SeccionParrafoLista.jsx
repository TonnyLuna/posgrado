import React from "react";
import Lista from "../../components/Secciones/Lista";
import Parrafo from "./Parrafo";
import SeccionTitulo from "./Titulo";

const SeccionParrafoLista = ({
  titulo,
  mostrarSeparador = true,
  texto,
  lista,
  conMargenSuperior,
}) => {
  return (
    <div>
      <SeccionTitulo titulo={titulo} mostrarSeparador={mostrarSeparador} />
      <Parrafo texto={texto} conMargenSuperior={conMargenSuperior} />
      <Lista lista={lista} />
    </div>
  );
};

export default SeccionParrafoLista;
