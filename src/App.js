// App.js
import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  // Programmatic navigation with useNavigate
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // go home when logged in
    } else {
      navigate("/login"); // go login when logged out
    }
  }, [isLoggedIn]);

  return (
    <div className="app">
      {/* Conditional rendering with <Navigate /> */}
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      {/* Pass login down via context */}
      <Outlet context={login} />
    </div>
  );
}

export default App;
