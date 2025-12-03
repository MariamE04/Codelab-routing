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
