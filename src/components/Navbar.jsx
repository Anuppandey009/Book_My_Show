import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </>
  );
}
