import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import './home.css';
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import CardCourses from "../../components/CardCourses";
import CardMentor from "../../components/CardMentor";
import SchoolPictures from "../../components/SchoolPictures";
import banner from '../../img/banners/banner.png';
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import axios from 'axios';

function Home() {

  const [course, setCourse] = useState([]);
  const [mentor, setMentor] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/courses`)
      .then(({ data }) => {
        setCourse(data);
      }).catch((error) => {
        console.log(error);
      })
    axios.get(`http://localhost:5000/mentors`)
      .then(({ data }) => {
        setMentor(data);
      }).catch((error) => {
        console.log(error);
      })
  }, []);


  const background = {
    backgroundImage: `url(${banner})`,
    height: '95vh',
    width: '100%',
    backgroundSize: 'cover'
  };

  const features = [
    { id: 1, title: "Design com propósito", description: "Somos apaixonados por formar designers de moda que possam causar um impacto real na indústria. Nossos professores promovem a criatividade e fornecem experiência prática para preparar designers para o mercado competitivo." },
    { id: 2, title: "Nosso Approach", description: "Nossa equipe de instrutores experientes oferece um espaço criativo e seguro para aprender e colaborar com outras pessoas, dando aos nossos alunos a oportunidade de iniciar sua carreira em design de moda. Acreditamos em transformar jovens talentos em designers de moda experientes, prontos para conquistar a indústria. \n\n\n Nossa abordagem combina design criativo, proficiência técnica e visão de negócios para ajudar nossos alunos a atingir seus objetivos, fornecendo aos nossos alunos uma experiência perspicaz, criativa e educacional." },
    { id: 3, title: "Visão", description: "Projetados para promover a criatividade, inovação e confiança em nossos alunos, a School capacita pessoas para criar e desenvolver designs de moda exclusivos com as últimas tendências do setor. Por meio de nossos cursos especializados, nos esforçamos para nutrir os talentos dos estilistas de amanhã e construir uma base sólida para que eles criem negócios de moda sustentáveis." }
  ]

  const mentoring = [
    { id: 1, title: "Individual", description: "Nosso programa oferece opções de 3, 6 ou 12 sessões nas quais você pode discutir sobre o seu negócio com mentores profissionais experientes e obter informações para desenvolver sua coleção, marca e produção dos produtos. Nosso objetivo é ajudá-lo a sair de cada sessão com mais confiança na direção que deseja seguir." },
    { id: 2, title: "Empresarial", description: "Voltada para as equipes de criação e desenvolvimento de produtos, oferecemos serviços adaptáveis​​às necessidades da empresa, com a opção de realizar atendimentos presenciais ou online. Ajudamos a acelerar o processo criativo colaborando com a criação de projetos de moda mais assertivos." },
    { id: 3, title: "Workshops", description: "Aprendizagem interativa, resolução de problemas com uma abordagem dinâmica e prática que envolve a equipe em cenários e desafios do mundo real, pesquisas de tendências de comportamento e produtos atualizando as referências criativas. " },
    { id: 4, title: "Palestras", description: "Nossos seminários adotam uma abordagem mais estruturada. Essas apresentações se aprofundam em tópicos específicos, fornecendo à sua equipe uma compreensão completa do assunto. Os seminários são ideais para fornecer o embasamento teórico e os insights necessários para apoiar a aplicação prática nos processos do dia a dia da empresa." }
  ]

  const mentoringInfos = [
    { id: 1, title: "Duração Mentorias:", description: "03, 06 ou 12 encontros com 2 horas de duração." },
    { id: 2, title: "Duração Palestras:", description: "1 hora" },
    { id: 3, title: "Duração Workshops:", description: "02 a 04 horas" },
    { id: 4, title: "Modalidade:", description: "Híbrido (Presencial ou Online)" }
  ]

  return (
    <div className="container" >
      <Header />
      <section id="home" style={background}>
        <Hero />
      </section>
      <section id="sobre" className="about">
        <div className="intro">
          <h1>Libere sua criatividade e leve sua paixão pela moda para o próximo nível.</h1>
          <p>Ajudamos você a desbloquear seu potencial e abrir caminho para um futuro de sucesso na moda.</p>
        </div>

        <div className="main">
          <div className="school">
            <h2>A escola</h2>
            <p> Oferecemos um ambiente de aprendizado criativo e estimulante para alunos de todas
              as idades descobrirem sua essência como designer de moda.
            </p>
            <p> <span> Quer nos conhecer?</span> Agende um horário entrando em contato:
            </p>
            <Link className="btn-action"
              to="https://api.whatsapp.com/send?phone=5511993221695&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20voc%C3%AAs." target="_blank">
              Agendar Horário
            </Link>
          </div>
          <div className="school-pictures">
            <SchoolPictures />
          </div>
        </div>

      </section>

      <section className="features">
        {features.map((feature) => (
          <div className="content-features" key={feature.id}>
            <div className='title-feature'>
              <h1>{feature.title}</h1>
            </div>
            <div className='description-features'>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section id="cursos" className="courses">
        <div className="courses-intro">
          <h2>Nossos cursos</h2>
          <p>Nossos cursos oferecem uma oportunidade única. Você ganhará a confiança e a experiência necessárias
            para ter sucesso no mundo da moda e do design.
          </p>
        </div>
        {
          course.length > 0 ? (
            <div className="content-courses">
              {
                <CardCourses />
              }
            </div>
          ) : (
            <p className="loading-courses">Carregando cursos...</p>
          )
        }
      </section>

      <section id="mentoria" className="mentoring">
        <div className="mentoring-intro">
          <h2>Mentoria de Negócios</h2>
          <p>No mundo acelerado da moda, onde as tendências vêm e vão e a indústria está sempre mudando, os responsáveis devem ser capazes de se adaptar e ficar por dentro de tudo.</p>
          <br />
          <p>Quando você dirige uma empresa, uma equipe ou quer abrir o seu próprio negócio, uma das chaves para o progresso contínuo é o poder da mentoria. Transmitir consistência, ganhar patrocinadores, faturar alto exige conhecimento e expertise na composição de looks e fotos incríveis.</p>
        </div>

        <div className="mentoring-details">
          <div className="mentoring-about">
            <h3>A mentoria</h3>
            <p>Ter um mentor é uma maneira poderosa de ajudá-lo a dar os passos certos com confiança.</p>
            <p>Experimente nossa abordagem que inclui mentoria corporativa, workshops e seminários, bem como sessões individuais para iniciantes ou para quem já está atuando.</p>
            <p>Fornecemos a orientação e o suporte necessários para enfrentar com segurança as complexidades da indústria da moda e obter melhores resultados.</p>
          </div>
          <div className="mentoring-team">
            <h3>Especialistas e Mentores</h3>
            <p>Equipe AMI School</p>
            <Link className="btn-action" to="/" target="_blank"> TENHO INTERESSE </Link>
          </div>
        </div>

        <div className="mentoring-types">
          <h3>Tipos de de Mentoria</h3>
          {mentoring.map((mentoring) => (
            <div className="content-mentoring" key={mentoring.id}>
              <div className='title-mentoring'>
                <h1>{mentoring.title}</h1>
              </div>
              <div className='description-mentoring'>
                <p>{mentoring.description}</p>
              </div>
            </div>
          ))}

          <div className="mentoring-infos">
            {mentoringInfos.map((info) => (
              <div className='mentoring-card' key={info.id}>
                <h1>{info.title}</h1>
                <p>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mentores" className="mentors">
        <div className="mentors-intro">
          <h2>Conheça nossos mentores</h2>
          <p>Nossos cursos oferecem uma oportunidade única. Você ganhará a confiança e a experiência necessárias para ter sucesso no mundo da moda e do design.</p>
        </div>
        {
          course.length > 0 ? (
            <div className="content-mentor">
              {mentor.map((mentor) => (
                <CardMentor
                  key={mentor.id}
                  id={mentor.id}
                  title={mentor.name}
                  image={mentor.image}
                />
              ))}
            </div>
          ) : (
            <p className="loading-courses">Carregando Mentores...</p>
          )
        }
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default Home;