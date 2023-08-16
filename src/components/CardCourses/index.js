import './cardCourses.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ModalCourses from "../../components/ModalCourses";
import axios from 'axios';

function CardCourses() {

    const [openModal, setOpenModal] = useState(false);
    const [course, setCourse] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/courses`)
            .then(({ data }) => {
                setCourse(data);
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="content-card-course">
            {course.map((item) => (
                <div className="course-card" key={item.id}>
                    <img className='card-img' src={item.image} />
                    <div className='title-courses'>
                        <h2>{item.title}</h2>
                    </div>
                    <div className='info-course'>
                        <p>{item.duration}</p>
                        <p>{item.days}</p>
                        <p>{item.datesAndTimes}</p>
                        <p>{item.modality}</p>
                    </div>
                    <Link className="btn-plus" onClick={() => { setSelectedCourseId(item.id); setOpenModal(true); }}> SAIBA MAIS </Link>
                </div>
            ))}
            <ModalCourses isOpen={openModal} setClose={() => setOpenModal(!openModal)} courseId={selectedCourseId} />
        </div>
    );
}

export default CardCourses;
