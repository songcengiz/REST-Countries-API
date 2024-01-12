import { Link } from 'react-router-dom';
import lightIcon from '../img/icon-light.svg';
import darkIcon from '../img/icon-dark.svg';

function Header({ darkMode, setDarkMode }) {
  function toggleDarkMode(params) {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div
      className={`flex w-full justify-between  px-5 py-3 shadow-md lg:px-20 ${
        darkMode ? 'bg-slate-800' : 'bg-white'
      }`}
    >
      <Link to="/">
        <h1
          className={`text-xl font-bold  ${
            darkMode ? 'text-slate-100' : 'text-slate-900'
          }`}
        >
          Where in the world?
        </h1>
      </Link>
      <p
        onClick={toggleDarkMode}
        className={`text-md flex justify-center gap-3 text-center font-semibold cursor-pointer ${
          darkMode ? 'text-slate-200' : 'text-slate-700'
        }`}
      >
        <span>
          {darkMode ? (
            <img className="" src={darkIcon} alt="dark" />
          ) : (
            <img className="" src={lightIcon} alt="light" />
          )}
        </span>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </p>
    </div>
  );
}

export default Header;
