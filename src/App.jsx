import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import InitialPage from './pages/InitialPage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<InitialPage />} />
            </Routes>
        </Router>

    )
}