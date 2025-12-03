const URL = "http://localhost:4000/users";

function authFacade() {
  let loggedInUser = null;

  async function login(userId, password) {
    const resp = await fetch(URL);
    const users = await resp.json();

    const user = users.find(u => u.username === userId && u.password === password);
    if (!user) throw new Error("Wrong username or password");

    loggedInUser = user;
    return user;
  }

  const logout = () => loggedInUser = null;

  const getUser = () => loggedInUser;

  const isLoggedIn = () => loggedInUser !== null;

  const hasRole = (role) => {
    return loggedInUser && loggedInUser.roles.includes(role);
  }

  return {
    login,
    logout,
    getUser,
    isLoggedIn,
    hasRole
  };
}

export default authFacade();
