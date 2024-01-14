import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import CountryDetail from './features/country/CountryDetail';
import AppLayout from './ui/AppLayout';

import Error from './ui/Error';
import { useState } from 'react';
import { loaderCountries, loaderCountryDetail } from './services/loaders';

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
          loader: loaderCountries,
          errorElement: <Error />,
        },
        {
          path: 'country/:alpha',
          element: <CountryDetail darkMode={darkMode} />,
          loader: loaderCountryDetail,
          errorElement: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
