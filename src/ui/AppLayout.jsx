import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';

function AppLayout({ darkMode, setDarkMode }) {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className={`${darkMode ? 'bg-slate-700 text-slate-100' : 'bg-slate-100 text-slate-700'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {isLoading && <Loader />}
      <main className="m-auto lg:mx-20">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
