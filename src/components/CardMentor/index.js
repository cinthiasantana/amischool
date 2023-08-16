import './cardMentor.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ModalMentorProfile from "../../components/ModalMentorProfile";

function CardMentor({ id, name, image }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="content-card">
            <div className="content-mentor-card">
                <div className="mentor-card">
                    <img className='card-img-mentor' src={image} />
                    <div className="info-mentor">
                        <div className='name-mentor'>
                            <h2>{name}</h2>
                        </div>
                    </div>
                </div>
                <Link className="btn-profile" onClick={() => setOpenModal(true)}> VER PERFIL COMPLETO </Link>
                <ModalMentorProfile isOpen={openModal} setClose={() => setOpenModal(!openModal)} mentorId={id} />
            </div>
        </div>
    );
}

export default CardMentor;
