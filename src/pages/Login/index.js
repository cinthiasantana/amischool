import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import banner from '../../img/banners/bannerCertificado.png';
import logo from '../../img/logos/logo2.svg';
import { AuthContext } from '../../contexts/auth';
import './login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { singIn, loadingAuth } = useContext(AuthContext);

  async function handleSingIn(e) {
    e.preventDefault();

    if (email !== '' && password !== '') {
      await singIn(email, password);
    }
  }

  const backgroundInvestment = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-200px'
  };

  return (
    <div className="container-panel" style={backgroundInvestment}>
      <div className="content-area-login">
        <div className="header-login">
          <img className="logo" src={logo} />
          <h1>Painel do Administrador</h1>
        </div>
        <form className="form-login" onSubmit={handleSingIn}>
          <div className="form-group">
            <label> Usuário : </label>
            <input
              type="name"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Senha : </label>
            <input
              type='password'
              placeholder="Insira a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-login">
            {loadingAuth ? "Carregando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;