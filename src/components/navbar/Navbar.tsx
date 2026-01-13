import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#213448] shadow-md fixed w-full z-50">
      <div className="flex items-center justify-between h-16 px-6">
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            News Summarizer
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 py-4 space-y-4">
            <Link to="/login" className="block text-blue-600 font-medium">
              Login
            </Link>
            <Link
              to="/register"
              className="block bg-blue-600 text-white text-center py-2 rounded"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
