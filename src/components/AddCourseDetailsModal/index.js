import React, { useState } from 'react';
import axios from 'axios';

function AddCourseDetailsModal({ isOpen, onClose }) {
    const [courseDetails, setCourseDetails] = useState({
        about: '',
        targetAudience: [],
        mentors: [],
        roadmap: [],
        investment: [],
        informations: [],
    });

    console.log(courseDetails)

    const handleInputChange = (section, index, event) => {
        const { name, value } = event.target;
        const updatedSection = [...courseDetails[section]];
        updatedSection[index] = { ...updatedSection[index], [name]: value };
        setCourseDetails({ ...courseDetails, [section]: updatedSection });
    };
    const handleAddCourseDetails = async () => {
        try {
            const response = await axios.post('http://localhost:5000/detailsCourses', courseDetails);
            // Handle success, maybe show a success message or navigate to a different page
            onClose();
        } catch (error) {
            console.error('Error adding course details:', error);
        }
    };

    return (
        <div className={`container-details-course ${isOpen ? 'open' : ''}`}>
            <div className="content-course">
                <h2>Adicionar Detalhes do Curso</h2>
                <label htmlFor="about">Sobre o Curso:</label>
                <textarea
                    id="about"
                    name="about"
                    value={courseDetails.about}
                    onChange={(e) => setCourseDetails({ ...courseDetails, about: e.target.value })}
                />

                {courseDetails.mentors.map((target, index) => (
                    <div key={target.id}>
                        <label htmlFor={target.id}>Descrição </label>
                        <input
                            type="text"
                            id={target.id}
                            name="description"
                            value={target.name || ''}
                            onChange={(e) => handleInputChange('mentors', index, e)}
                        />
                    </div>
                ))}

                <div className="modal-buttons">
                    <button className="btn-cancel" onClick={onClose}>
                        Cancelar
                    </button>
                    <button className="btn-add" onClick={handleAddCourseDetails}>
                        Adicionar Detalhes do Curso
                    </button>
                </div>


            </div>
        </div>
    );

}

export default AddCourseDetailsModal;