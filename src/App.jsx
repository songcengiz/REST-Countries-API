import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import CountryDetail, {
  loader as countryDetailLoader,
} from './features/country/CountryDetail';
import AppLayout from './ui/AppLayout';
import Countries, {
  loader as countriesLoader,
} from './features/countries/Countries';
import Error from './ui/Error';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const router = createBrowserRouter([
    {
      element: <AppLayout darkMode={darkMode} setDarkMode={setDarkMode} />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home darkMode={darkMode} />,
          loader: countriesLoader,
          errorElement: <Error />,
        },
        {
          path: '/country/:alpha',
          element: <CountryDetail darkMode={darkMode} />,
          loader: countryDetailLoader,
          errorElement: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
