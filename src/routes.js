import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/home";
import Artigo from "./pages/artigo";

const Rotas = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="artigo/:id" element={<Artigo />} />
		</Routes>
	</BrowserRouter>
);
export default Rotas;