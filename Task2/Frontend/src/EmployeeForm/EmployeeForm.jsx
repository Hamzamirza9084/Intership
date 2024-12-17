import React, { useState } from 'react';
import axios from 'axios';
import './EmployeeForm.css'
import { Link } from "react-router-dom"

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const employeeData = {
        name,
        email,
        projects_given: projectsGiven,
        projects_done: projectsDone,
        score
      };
      const response = await axios.post('http://localhost:5000/api/employee/addEmployee', employeeData);
      alert('Employee added successfully');
      setName('');
      setEmail('');
      setProjectsGiven(0);
      setProjectsDone(0);
      setScore(0);
    } catch (error) {
      alert('Error adding employee');
    }
  };

  return (
    <>
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
       
        <button type="submit">Add Employee</button>
      </form>
    </div>
        <Link to='/Tracking'><button>Back</button></Link>
        </>
  );
};

export default EmployeeForm;
