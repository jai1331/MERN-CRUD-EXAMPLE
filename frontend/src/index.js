import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import './Login.css';
import HOCForRouterProps from "./HOCForRouterProps";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HOCForRouterProps Component={Login} />} />
                <Route exact path='/register' element={<HOCForRouterProps Component={Register} />} />
                <Route path='/dashboard' element={<HOCForRouterProps Component={Dashboard} />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);