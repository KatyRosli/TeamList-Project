import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { RegisterPage } from './pages/Register';
import { LoginPage } from './pages/Login';
import { DepositPage } from './pages/Deposit';
import { LiveCasinoPage } from './pages/LiveCasino';
import { ProtectedLayout } from './components/ProtectedLayout';
import { HomeLayout } from './components/HomeLayout';
import { AuthLayout } from './components/AuthLayout';
import './styles.css';
import { getAll } from './services/TeamService';
import { ITeam } from './types/Team';

const getUserData = (): Promise<string | null> =>
  new Promise((resolve) => 
    setTimeout(() => {
      const user = window.localStorage.getItem('user');
      resolve(user);
    }, 3000)
  );

export interface TeamLoaderData {
  data: ITeam
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      //loader={() => defer({ userPromise: getUserData()})}
    >
      <Route element={<HomeLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} loader={async () => ({ data: (await getAll()).data })}/>
      </Route>

      <Route path='/games' element={<ProtectedLayout />}>
        <Route path='/games/deposit' element={<DepositPage />} />
        <Route path='/games/livecasino' element={<LiveCasinoPage />} />
      </Route>
    </Route>
  )
);

