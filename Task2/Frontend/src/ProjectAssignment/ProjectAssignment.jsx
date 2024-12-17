import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

const ProjectAssignment = () => {
  const [email, setEmail] = useState('');
  const [projectsGiven, setProjectsGiven] = useState('');
  const [projectsDone, setProjectsDone] = useState('');
  const [error, setError] = useState('');
  const [employeeData, setEmployeeData] = useState(null);

  
  const updateProjects = async () => {
    if (!email || projectsGiven === '' || projectsDone === '') {
      setError('Please provide email, projects given, and projects done.');
      return;
    }
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/employee/updateProjects', {
        email,
        projectsGiven: parseInt(projectsGiven),
        projectsDone: parseInt(projectsDone),
      });

      setEmployeeData(response.data); 
      alert('Employee projects updated successfully');
    } catch (error) {
      alert('Error updating projects: ' + error.response.data.message);
    }
  };

  return (
    <>
    <div>
      <h2>Project Assignment</h2>

      <div>
        <h3>Update Employee Projects</h3>
        <input
          type="email"
          placeholder="Employee Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Projects Given"
          value={projectsGiven}
          onChange={(e) => setProjectsGiven(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Projects Done"
          value={projectsDone}
          onChange={(e) => setProjectsDone(e.target.value)}
          required
        />
        <button onClick={updateProjects}>Update Projects</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {employeeData && (
        <div>
          <h4>Employee Info</h4>
          <p>Email: {employeeData.email}</p>
          <p>Projects Given: {employeeData.projects_given}</p>
          <p>Projects Done: {employeeData.projects_done}</p>
          <p>Score: {employeeData.score}</p> 
        </div>
      )}
    </div>
      
    <Link to='/Tracking'><button>Back</button></Link>
    </>
  );
};

export default ProjectAssignment;
