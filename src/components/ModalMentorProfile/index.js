import React, { useEffect, useState } from "react";
import './modalMentorProfile.css';
import axios from 'axios';
import { FaAnglesRight,FaXmark } from "react-icons/fa6";

function ModalMentorProfile({ isOpen, mentorId, setClose  }) {
    const [about, setAbout] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        if (isOpen && mentorId) {
            axios.get(`http://localhost:5000/detailsMentors/${mentorId}`)
                .then(({ data }) => {
                    setAbout(data);
                    setDetails(data.details);
                }).catch((error) => {
                    console.log(error);
                })
        }
    }, [isOpen, mentorId]);

    if (isOpen) {
        return (
            <div className="container-details-profile" key={about.id}>
                <div className="content-profile" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                    <div className="content-btn-close">
                        <button onClick={setClose} className="btn-close"><FaXmark className="icon-close" /></button>
                    </div>
                    <div className="image-profile">
                        <img className='img-mentor' src={about.image} />
                    </div>
                    <div className="details-profile">
                        <h1>{about.name}</h1>
                        <h3>{about.description}</h3>
                        {details.map((details) => (
                            <div className="item-description" key={details.id}>
                                <span><FaAnglesRight className="icon" /></span>
                                <p>{details.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalMentorProfile;