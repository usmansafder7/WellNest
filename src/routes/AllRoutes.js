import { Routes, Route } from "react-router-dom";
import {Home, About, Contact, Services} from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
    </Routes>
  )
}
