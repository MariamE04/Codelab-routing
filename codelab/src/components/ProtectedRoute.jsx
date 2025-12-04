import { Navigate, Outlet } from "react-router";
import AuthFacade from "../AuthFacade";

function ProtectedRoute({ role }) {

  if (!AuthFacade.isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  if (role && !AuthFacade.hasRole(role)) {
    return <h2>Access denied</h2>;
  }

  return <Outlet />;
}

export default ProtectedRoute;


//Hvorfor bruger vi <Outlet /> i ProtectedRoute?
// Fordi ProtectedRoute ikke har sin egen side.

// Den er KUN en gatekeeper.
// Den skal enten:

// give adgang → og så vise den nested route (Admin)
// eller
// afvise adgang → redirect eller “Access denied”

// Så ProtectedRoute fungerer som “en dør ind til noget andet”, ikke som en side.
// Derfor skal den bruge Outlet, præcis som App bruger Outlet.