import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import separador from "../../assets/separador.svg";
import EstudiantesAccordion from "../../components/Estudiantes/EstudiantesAccordion";
import imagePG from "../../assets/Carrusel/1.jpg";

const listPrimeraGeneracion = [
  {
    id: 1,
    lineaUno: [
      "1. Lizbeth Gómez Muñoz",
      "2. Eumir Esteban Salgado Lampart",
      "3. José Filiberto Maldonado Catalán",
    ],
    lineaDos: [
      "4. María Isabel Ramírez Arcos",
      "5. Bryan Abisaí Nava Ramírez",
      "6. Nestor Uriel Solache Castro",
    ],
  },
];

const listSegundaGeneracion = [
  {
    id: 2,
    lineaUno: [
      "1. Dominic Brian Román Padilla",
      "2. Víctor Manuel Romero Juárez",
      "3. Arturo Cisneros Mayoral",
    ],
    lineaDos: [
      "4. Carlos Gilberto Jiménez Saldaña",
      "5. Marbens Santos Arrieta",
    ],
  },
];

const lisTerceraGeneracion = [
  {
    id: 3,
    lineaUno: [
      "1. Denisse Peralta Rojo",
      "2. Isaid Uriel Basilios Segovia",
      "3. Diana Dolores Vázquez Martínez",
      "4. Daniela Aurora Morales López",
      "5. Brandon Aldahir Jacobo Salinas",
      "6. José Antonio Hernández Salinas",
      "7. José Antonio Carranza Martínez",
      "8. Mario Alberto Duque Peralta",
      "9. Lisandro Omar Santos Arrieta",
    ],
    lineaDos: [
      "1. José Antonio Rendón Vargas",
      "2. Imanol Marianito Cuahuitic",
      "3. Sergio Fernando Franco Salmerón",
      "4. Williams Reyna Pérez",
    ],
  },
];

const Estudiantes = () => {
  return (
    <>
      <TopBar />
      <div className="flex flex-row m-9 gap-10">
        <div className="w-2/3 h-auto py-6 shadow-xl mb-4">
          <EstudiantesAccordion
            image={imagePG}
            title="Primera Generación"
            list={listPrimeraGeneracion}
          />
          <EstudiantesAccordion
            image={imagePG}
            title="Segunda Generación"
            list={listSegundaGeneracion}
          />
          <EstudiantesAccordion
            image={imagePG}
            title="Tercera Generación"
            list={lisTerceraGeneracion}
          />
        </div>
        <PanelLateral />
      </div>
      <Footer />
    </>
  );
};

export default Estudiantes;
