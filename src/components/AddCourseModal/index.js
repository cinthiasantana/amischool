import React, { useState } from 'react';
import axios from 'axios';

function AddCourseModal({ isOpen, onClose, onCourseAdded }) {
    const [addDetailsModalOpen, setAddDetailsModalOpen] = useState(false);

    const [newCourse, setNewCourse] = useState({
        title: '',
        duration: '',
        days: '',
        datesAndTimes: '',
        modality: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value,
        }));
    };

    const handleAddCourse = async () => {
        try {
            const response = await axios.post('http://localhost:5000/courses', newCourse);
            onCourseAdded(response.data);
            setNewCourse({
                title: '',
                duration: '',
                days: '',
                datesAndTimes: '',
                modality: '',
                // Other fields...
            });
            onClose();

            // Open the modal for adding course details
            setAddDetailsModalOpen(true);
        } catch (error) {
            console.error('Error adding new course:', error);
        }
    };

    return (
        <div className={`container-details-course ${isOpen ? 'open' : ''}`}>
            <div className="content-add-card-course" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                <h2>Adicionar Novo Curso</h2>
                <label htmlFor="title">Título:</label>

                <label htmlFor="duration">Duração:</label>



                <div className="course-card">
                    <img className='card-img' />
                    <div className='title-courses'>
                        <h2><input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Insira o Título do Curso"
                            value={newCourse.title}
                            onChange={handleInputChange}
                        /></h2>
                    </div>
                    <div className='info-course'>
                        <p>Duração:<input
                            type="text"
                            id="duration"
                            name="duration"
                            placeholder="Insira a Duração do Curso"
                            value={newCourse.duration}
                            onChange={handleInputChange}
                        /></p>
                        <p>Datas: <input
                            type="text"
                            id="days"
                            name="days"
                            placeholder="Insira as Datas"
                            value={newCourse.days}
                            onChange={handleInputChange}
                        /></p>
                        <p><input
                            type="text"
                            id="datesAndTimes"
                            name="datesAndTimes"
                            placeholder="Insira os Dias da Semana e o Horário"
                            value={newCourse.datesAndTimes}
                            onChange={handleInputChange}
                        /></p>
                        <p>Modalidade:<input
                            type="text"
                            id="modality"
                            name="modality"
                            placeholder="Insira a Modalidade do Curso"
                            value={newCourse.modality}
                            onChange={handleInputChange}
                        /></p>
                    </div>
                    <a className="btn-plus"> SAIBA MAIS </a>
                </div>
                <div className="modal-buttons">
                    <button className="btn-cancel" onClick={onClose}>
                        Cancelar
                    </button>
                    <button className="btn-add" onClick={handleAddCourse}>
                        Adicionar Curso
                    </button>
                </div>
            </div>

        </div>
    );
}

export default AddCourseModal;