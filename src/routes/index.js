import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';
import Private from './Private';

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login-administrador" element={<Login />} />
            <Route path="/painel-administrador" element={<Private > <AdminPanel /> </Private>} />
        </Routes>
    );
}

export default RoutesApp;
