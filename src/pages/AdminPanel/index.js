import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import './adminPanel.css';
import Header from "../../components/HeaderAdminPanel";
import CardCourses from "../../components/CardCourses";
import AddCourseModal from "../../components/AddCourseModal";
import AddCourseDetailsModal from "../../components/AddCourseDetailsModal";
import axios from 'axios';

function AdminPanel({onClose}) {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [addDetailsModalOpen, setAddDetailsModalOpen] = useState(false);

  const handleCourseAdded = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  const handleAddCourse = async (newCourse) => {
    try {
      const response = await axios.post('http://localhost:5000/courses', newCourse);
      setCourses([...courses, response.data]);
      onClose();

      // Open the modal for adding course details
      setAddDetailsModalOpen(true); // Add this line
    } catch (error) {
      console.error('Error adding new course:', error);
    }
  }

  return (
    <div className="container-admin-panel">
      <Header />
      <div className="content-panel">
        <div className="intro-edit-courses">
          <h1>Clique no curso que deseja editar</h1>
          <button className="btn-add-course" onClick={() => setAddModalOpen(true)}> + Adicionar novo curso</button>
        </div>
        <div  >
        <CardCourses courses={courses}  />
        </div>
      </div>
      {addModalOpen && (
        <AddCourseModal
          isOpen={addModalOpen}
          onClose={() => setAddModalOpen(false)}
          onCourseAdded={(newCourse) => {
            handleCourseAdded(newCourse);
            setAddDetailsModalOpen(true); // Open the details modal
          }}
        />
      )}
      {addDetailsModalOpen && (
        <AddCourseDetailsModal
          isOpen={addDetailsModalOpen}
          onClose={() => setAddDetailsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default AdminPanel;