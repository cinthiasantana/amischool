import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logos/logoMain.png'

function Header() {
  return (
    <header id='header'>
      <div className='content'>
        <div className='logo'>
          <Link to="/"><h1><img src={logo} alt="Logo AmiShcool" />school</h1></Link>
        </div>
        <nav className='navbar'>
          <Link className='nav-link' to="">A Escola</Link>
          <Link className='nav-link' to="">Nossos Cursos</Link>
          <Link className='nav-link' to="">Mentores</Link>
          <Link className='nav-link' to="">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
