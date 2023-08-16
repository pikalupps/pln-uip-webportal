import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-xl">PLN UIP NUSRA</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-black hover:text-sky-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-sky-300">About</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-sky-300">Services</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-sky-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
