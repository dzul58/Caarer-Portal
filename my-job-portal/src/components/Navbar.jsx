import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-white text-3xl font-bold">JobPortal</Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
