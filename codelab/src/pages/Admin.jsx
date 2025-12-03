import AuthFacade from "../AuthFacade";
import '../styles/login.css'

function Admin() {
  const user = AuthFacade.getUser();

  return (
    <div>
        <p>            </p>
      <h2>Welcome admin: {user ? user.username : ""}</h2>
      <p>You can manage tours, users, and other admin tasks here.</p>
    </div>
  );
}

export default Admin;
