import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Declaraciones from '../pages/Declaraciones';
import Instalaciones from '../pages/Instalaciones';
import Incidencias from '../pages/Incidencias';
import Financiacion from '../pages/Financiacion';
import Informes from '../pages/Informes';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/declaraciones" element={<Declaraciones />} />
            <Route path="/instalaciones" element={<Instalaciones />} />
            <Route path="/incidencias" element={<Incidencias />} />
            <Route path="/financiacion" element={<Financiacion />} />
            <Route path="/informes" element={<Informes />} />
        </Routes>
    )
}

export default Router;
