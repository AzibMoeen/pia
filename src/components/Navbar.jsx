import { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { navItems } from '../data';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
       
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex flex-col">
                <div className="flex items-center">
                  
                </div>
                
                <img src="/Images/pia-logo.svg" alt="PIA Logo" className="w-[184px] h-[53px]" />
                </div>
            </Link>
          </div>


          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.link} 
                className="text-green-800 hover:bg-green-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

        
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-green-800 hover:text-green-600">
              <FaSearch className="h-5 w-5" />
            </button>
            <Link 
              to="#" 
              className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Award +Plus Login
            </Link>
          </div>

   
          <div className="flex lg:hidden items-center space-x-4">
            <button className="text-green-800 hover:text-green-600">
              <FaSearch className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-green-800 hover:text-green-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.link} 
                className="text-green-800 hover:bg-green-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;