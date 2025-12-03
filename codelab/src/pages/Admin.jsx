import { useEffect, useState } from "react";
import AuthFacade from "../AuthFacade";
import '../styles/login.css';

function Admin() {
  const user = AuthFacade.getUser();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Henter alle brugere fra din JsonServer
    fetch("http://localhost:4000/users")
      .then(resp => resp.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div>
      <h2>Welcome admin: {user ? user.username : ""}</h2>
      <p>You can manage tours, users, and other admin tasks here.</p>

      <h3>All Users</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>UserID</th>
            <th>Username</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={crypto.randomUUID()}>
              <td>{u.userId}</td>
              <td>{u.username}</td>
              <td>{u.roles.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
