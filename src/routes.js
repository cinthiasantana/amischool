import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/painel-administrador" element={<AdminPanel />} />
            <Route path="/login-administrador" element={<Login />} />
        </Routes>
    );
}

export default RoutesApp;
