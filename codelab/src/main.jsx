import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

{/*importerer Home, Admin, Login osv. -> bruges som elementer i min <Route>. */}
import App from "./App";
import Home from "./pages/Home";
import Travels from "./pages/Travels";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

{/*min index.html (fra Vite) har en <div id="root"></div>.  -React skal placere hele app’en derinde.*/}
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter> {/*BrowserRouter gør det muligt at lave Single Page Application routing uden at reloade siden. */}
    <Routes> {/*samler alle Route-elementer. */}

      {/*definerer en sti og hvad der skal vises der. */}
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="travels" element={<Travels />} />
        <Route path="about" element={<About />} />

        {/* ADMIN BESKYTTET */}
        <Route element={<ProtectedRoute role="admin" />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> {/*matcher alle ukendte routes */}
      </Route>

    </Routes>
  </BrowserRouter>
);


{/*“Binder” React fast til <div id="root"> -Starter applikationen og BrowserRouter sørger for, at alle Route-systemer virker */}
//ReactDOM.createRoot(root).render(


// <Route path="/" element={<App />}>
// betyder:
// Når path = /, så skal App vises
// Og alle nested routes bliver vist inde i App’s <Outlet />