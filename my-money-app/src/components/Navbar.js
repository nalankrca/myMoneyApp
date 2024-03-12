import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import styles from "./Navbar.module.css";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney App</li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/singup">Singup</Link>
            </li>
          </>
        )}
        {user && (
          <>
          <li>Hello, {user.displayName}</li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
        </>
        )}
      </ul>
    </nav>
  );
}
