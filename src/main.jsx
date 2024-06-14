import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import {Home,About,Portfolio,Service,Clients,Pricing,Insights,SharedLayout,Errorpage} from './pages';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>} />
        <Route path="/about-me" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/services" element={<Service/>}/>
        <Route path="/clients" element={<Clients/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/insights" element={<Insights/>} />
        <Route path="*" element={<Errorpage/>}/>
      </Route>

    </Routes>
  </BrowserRouter>
);
