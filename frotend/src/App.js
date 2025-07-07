import './App.css';
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignUp';
import Home from './pages/Home';
import UserProtectedWraper from './pages/UserProtectedWraper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectedWraper from './pages/CaptainProtectedWraper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';
import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Start />} />
        <Route path={'/login'} element={<UserLogin />} />
        <Route path={'/riding'} element={<Riding />} />
        <Route path={'/captain-riding'} element={<CaptainRiding />} />
        <Route path={'/signup'} element={<UserSignUp />} />
        <Route path={'/captain-login'} element={<CaptainLogin />} />
        <Route path={'/captain-signup'} element={<CaptainSignUp />} />
        <Route path={'/home'} element={<UserProtectedWraper><Home /></UserProtectedWraper>} />
        <Route path={'/user/logout'} element={<UserProtectedWraper><UserLogout /></UserProtectedWraper>} />
        <Route path={'/captain-home'} element={<CaptainProtectedWraper><CaptainHome /></CaptainProtectedWraper>} />

        <Route path={'/captain-logout'} element={<CaptainProtectedWraper><CaptainLogout /></CaptainProtectedWraper>} />
      </Routes>
    </div>
  );
}

export default App;
