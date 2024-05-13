import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { title: "Inicio", to: "/" },
    { title: "Objetivos", to: "/objetivos" },
    { title: "Perfiles", to: "/perfiles" },
    { title: "Estudiantes", to: "/estudiantes" },
    { title: "Núcleo Academico", to: "/nucleoacademico" },
    //{ title: "LGAC", to: "/lgac" },
    { title: "Plan de Estudios", to: "/planesestudios" },
    { title: "Convocatorias", to: "/convocatorias" },
    //{ title: "Vinculación", to: "/vinculacion" },
  ];

  return (
    <>
      <header className="sticky top-0 z-20 flex justify-between items-center shadow-2xl">
        <nav className="w-screen bg-white shadow-2xl flex">
          <div className="flex justify-between mx-auto w-full">
            <div className="flex items-center justify-center gap-16 my-4 w-full">
              <div className="flex flex-wrap gap-2 w-full mx-auto">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className={`flex-grow hover:text-blue-700 text-2xl hover:shadow-sm transition-all duration-300 px-2 text-center ${
                      currentPath === item.to
                        ? "text-blue-900 font-semibold"
                        : "text-blue-900"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
