import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Convocatorias from "../pages/Convocatorias/Convocatorias";
import Estudiantes from "../pages/Estudiantes/Estudiantes";
import NucleoAcademico from "../pages/NucleoAcademico/NucleoAcademico";
import Objetivos from "../pages/Objetivos/Objetivos";
import Perfiles from "../pages/Perfiles/Perfiles";
import PlanEstudios from "../pages/PlanEstudios/PlanEstudios";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/objetivos" element={<Objetivos />} />
      <Route path="/perfiles" element={<Perfiles />} />
      <Route path="/estudiantes" element={<Estudiantes />} />
      <Route path="/nucleoacademico" element={<NucleoAcademico />} />
      <Route path="/planestudios" element={<PlanEstudios />} />
      <Route path="/convocatorias" element={<Convocatorias />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default AppRouter;
