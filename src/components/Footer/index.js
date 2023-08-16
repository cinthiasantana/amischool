import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id='footer' className='container-footer'>
      <div className="content-footer">
        <h1> AMI School </h1>
        <p>Copyright 2023 Ateliê Modaimagem. <br />
          Todos os direitos reservados.</p>
      </div>
      <div className='admin-panel'>
        <Link to="/login-administrador" target='_blank'>
          <h3>Painel do Administrador</h3>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
