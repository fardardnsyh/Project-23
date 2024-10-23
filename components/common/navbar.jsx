import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-slate-900 bg-gradient-to-b from-violet-600/[.15] via-transparent text-sm dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl text-gray-200 font-semibold dark:text-white py-4"
            href="/"
            aria-label="Brand"
          >
            CoverLetterMate
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
