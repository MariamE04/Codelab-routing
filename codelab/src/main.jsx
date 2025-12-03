import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
import Home from "./pages/Home";
import Travels from "./pages/Travels";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="travels" element={<Travels />} />
        <Route path="about" element={<About />} />

        {/* ADMIN BESKYTTET */}
        <Route element={<ProtectedRoute role="admin" />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  </BrowserRouter>
);
