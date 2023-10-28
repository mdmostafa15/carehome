import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './pages/Home';
import TypesOfCare from './pages/TypesOfCare';
import Help from './pages/Help';
import About from './pages/About';
import NoPage from './pages/NoPage';
import CareCenter from './pages/CareCenter';


function RoutWrap() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path='/typesofcare' element={<TypesOfCare/>} />
                <Route path='/helpnadvice' element={<Help/>} />
                <Route path='/contacts' element={<About/>} />
                <Route path='/carecenter' element={<CareCenter/>} />
                <Route path='*' element={<NoPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RoutWrap>
        <App />
    </RoutWrap>
);
