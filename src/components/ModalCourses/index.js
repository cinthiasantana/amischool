import React, { useEffect, useState } from "react";
import './modalCourses.css';
import banner from '../../img/banners/bannerCertificado.png';
import axios from 'axios';
import { FaAnglesRight, FaXmark } from "react-icons/fa6";

function ModalCourses({ isOpen, courseId, setClose }) {
    const [detailsCourse, setDetailsCourse] = useState([]);
    const [targetAudience, setTargetAudience] = useState([]);
    const [mentors, setMentors] = useState([]);
    const [roadmap, setRoadmap] = useState([]);
    const [investment, setInvestment] = useState([]);
    const [informations, setInformations] = useState([]);

    useEffect(() => {
        if (isOpen && courseId) {
            axios.get(`http://localhost:5000/detailsCourses/${courseId}`)
                .then(({ data }) => {
                    setDetailsCourse(data);
                    setTargetAudience(data.targetAudience);
                    setMentors(data.mentors);
                    setRoadmap(data.roadmap);
                    setInvestment(data.investment);
                    setInformations(data.informations);
                }).catch((error) => {
                    console.log(error);
                })
        }
    }, [isOpen, courseId]);

    const renderLineBreaks = (text) => {
        if (text) {
            const lines = text.split('\n');
            return lines.map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ));
        }
        return null;
    };

    const backgroundInvestment = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-100px'
    };

    if (isOpen) {
        return (
            <div className="container-details-course" key={detailsCourse.id}>
                <div className="content-course" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                    <div className="content-btn-close">
                        <button onClick={setClose} className="btn-close"><FaXmark className="icon-close" /></button>
                    </div>
                    <section className="about-course">
                        <div className="title-course">
                            <h1>{detailsCourse.title}</h1>
                        </div>
                        <div className="description-course">
                            <p>{renderLineBreaks(detailsCourse.about)}</p>
                        </div>
                        <div className="details-about">
                            <div className="target-audience">
                                <h3>Para quem é o curso:</h3>
                                {targetAudience.map((info) => (
                                    <div className='' key={info.id}>
                                        <p> <FaAnglesRight className="icon" /> {info.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mentors-course">
                                <h3>Especialistas e Mentores:</h3>
                                {mentors.map((info) => (
                                    <div className='' key={info.id}>
                                        <p><FaAnglesRight className="icon" /> {info.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="roadmap">
                        <h2>O que você irá aprender</h2>
                        <div className="group-roadmap">
                            {roadmap.map((info) => (
                                <div className="item-roadmap" key={info.id}>
                                    <span><FaAnglesRight className="icon" /></span>
                                    <p>{info.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="investment" style={backgroundInvestment}>
                        <h2>Investimento</h2>
                        {investment.map((info, index) => (
                            <div className='investment-details' key={`info-${index}`}>
                                <p>Valor à vista</p>
                                <h1>R$ {info.cashValue}</h1>
                                <p>(com desconto de 5% no Pix) </p>
                                <h3>ou em {info.numberInstallments}x de {info.installmentValue} no cartão de crédito</h3>
                                <a href="https://api.whatsapp.com/send?phone=5511993221695&text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20no%20curso%20de%20Design%20de%20Cal%C3%A7ados."
                                    target="_blank"> QUERO GARANTIR MINHA VAGA </a>
                            </div>
                        ))}
                    </section>

                    <section className="informations">
                        {informations.map((info, index) => (
                            <div className='group-info' key={`info-${index}`}>
                                <div className="info-item">
                                    <h3>Datas:</h3>
                                    <p>{info.dates}</p>
                                </div>
                                <div className="info-item">
                                    <h3>Duração:</h3>
                                    <p>{info.duration}</p>
                                </div>
                                <div className="info-item">
                                    <h3>Modalidade:</h3>
                                    <p>{renderLineBreaks(info.modality)}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        );
    }
}

export default ModalCourses;