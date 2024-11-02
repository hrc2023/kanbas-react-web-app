import React from 'react';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import store from "./Kanbas/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
    <div>
    <Routes>
      <Route path="/" element={<Navigate to="Kanbas" />} />
      <Route path="/Labs/*" element={<Labs />} />
      <Route path="/Kanbas/*" element={<Kanbas />} />
    </Routes>
    </div>
    </Provider>
    </HashRouter>
  );
}
