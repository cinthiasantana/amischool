import './contact.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";

function Contact() {
    return (
        <div id='contato' className='container-contact'>
            <h1 className='title'>Fale conosco por email ou pelo Whatsapp</h1>

            <div className='content-contact'>
                <div className='intro-contact'>
                    <p>Diga-nos quais são as portas de crescimento que mais lhe interessam! Você também pode incluir produtos
                        ou áreas de especialização sobre as quais gostaria de falar.</p>

                    <Link className="btn-action"
                        to="https://api.whatsapp.com/send?phone=5511993221695" target="_blank">
                        FALAR PELO WHATSAPP
                    </Link>

                    <div className='description-contact'>
                        <div className="address">
                            <h3>Endereço</h3>
                            <p>Ateliê ModaImagem, <br />
                                Rua Domingos de Morais, 2187 <br />
                                CJ 605 - Torre Paris <br />
                                São Paulo, SP </p>
                        </div>
                        <div className="social-media">
                            <h3>Redes Sociais</h3>
                            <Link className="instagram"
                                to="https://instagram.com/ami.school?igshid=YmMyMTA2M2Y=" target="_blank">
                                <FaInstagram className='icon' /> Instagram
                            </Link>

                        </div>
                    </div>
                </div>
                <div className='content-form'>
                    <form className="form" action="https://formsubmit.co/contato@amischool.com.br" method="POST">
                        <input type="hidden" name="_next" value="https://amischool.com.br/confirmacao.html" />
                        <input type="hidden" name="_subject" value="DÚVIDAS - PORTAL FALE CONOSCO" />
                        <input type="hidden" name="_captcha" value="false" />
                        <div className='inputs'>
                            <div className="form-group ">
                                <label >Nome*</label>
                                <input type="text" name="Nome" className="form-control" id="name" required />
                            </div>
                            <div className="form-group ">
                                <label >Email*</label>
                                <input type="email" className="form-control" name="Email" id="email" required />
                            </div>
                            <div className="form-group ">
                                <label>Telefone (opcional)</label>
                                <input type="tel" name="Telefone" className="form-control" id="tel" />
                            </div>
                            <div className="form-group ">
                                <label >Empresa (opcional)</label>
                                <input type="text" className="form-control" name="Empresa" id="empresa" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label >Mensagem (opcional)</label>
                            <textarea className="form-control" name="message" rows="6" required></textarea>
                        </div>
                        <button type="submit" className="btn-send">ENVIAR</button>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Contact;
