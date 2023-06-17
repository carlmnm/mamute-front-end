import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { UserProvider } from './contexts/userContext';
import useToken from './hooks/useToken';

export default function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<InitialPage />} />
                    <Route path='/log-in' element={<LoginPage />} />
                    <Route path='/home' element={
                        <ProtectedRouteGuard>
                            <HomePage/>
                        </ProtectedRouteGuard>
                    }></Route>
                </Routes>
            </Router>
        </UserProvider>

    )
}

function ProtectedRouteGuard({ children }) {
    const token = useToken();
  
    if (!token) {
      return <Navigate to="/" />;
    }
  
    return <>
      {children}
    </>;
  }