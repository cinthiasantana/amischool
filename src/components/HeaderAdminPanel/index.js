import './headerAdminPanel.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logos/logo2.svg';

function HeaderAdminPanel() {
  return (
    <div className="sidebar">
      <div className='sidebar-content'>
        <div className='panel-intro'>
          <img src={logo} alt="Logo" />
          <h2>Painel do Administrador</h2>
        </div>
        <div className="links">
          <Link to="/dashboard">
            Agenda Inicial
          </Link>
          <Link to="/customers">
            Cursos
          </Link>
          <Link to="/profile">
            Mentores
          </Link>
        </div>
        <button className='btn-logout'>Sair</button>
      </div>
    </div>
  );
}

export default HeaderAdminPanel;
