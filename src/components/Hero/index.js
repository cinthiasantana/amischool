import './hero.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

function Hero() {

    const schedule = [
        { id: 1, title: "Design de Calçados", description: "Princípios básicos de ergonomia do calçado, conceituação e criação de produtos e montagem de book de coleção.", dates: "Datas: 02, 07, 09, 14 e 16 de Agosto", time: "Horário: 19:30h às 22:30h", weekdays: "Segundas e Quartas", link: "" },
        { id: 2, title: "Oficina de Estilo", description: "Elementos do design aplicado à linguagem visual de moda: tipos físicos, estilos de vestir, linhas e cores.", dates: "Datas: 11, 13, 18, 20, 25 e 28 de Setembro", time: "Horário: 19:30h às 22:30h", weekdays: "Segundas e Quartas", link: "" },
        { id: 3, title: "Design de Bolsas Fashion Business", description: "Comportamentos e tendências a partir da orientação do briefing, identificação do consumidor e das tendências, alinhando-as com a identidade da marca.", dates: "Datas: 21, 23, 28, e 30 de Agosto e 04 de Setembro", time: "Horário: 19:30h às 22:30h", weekdays: "Segundas e Quartas", link: "" },
        { id: 4, title: "Desenvolvimento de Coleção e Economia Circular", description: "Este curso explora os aspectos históricos, sociais e ambientais da indústria da moda global e as ferramentas e metodologias atuais disponíveis para melhorá-la.", dates: "Datas: 16 e 17 de Setembro", time: "Horário: 19:30h às 22:30h", weekdays: "Sábado e Domingo", link: "" }
    ]

    return (
        <div className="container-hero">
            <Swiper spaceBetween={50} slidesPerView={1} navigation speed={800}
                autoplay={{ delay: 5000, disableOnInteraction: false, }} >
                {schedule.map((info) => (
                    <SwiperSlide key={info.id}>
                        <div className='info-schedule'>
                            <h5 className='name'>Agenda:</h5>
                            <h1 className="title"> {info.title} </h1>
                            <h3 className="description">{info.description}</h3>
                            <p className="dates">{info.dates}</p>
                            <p className="time">{info.time}</p>
                            <h4 className="weekdays">{info.weekdays}</h4>
                            <Link to="/"><button className="btn-plus"> SAIBA MAIS</button></Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >
        </div >
    );
}

export default Hero;
