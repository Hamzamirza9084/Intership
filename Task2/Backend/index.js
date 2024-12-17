import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Employee from './models/Employee.js';

const app = express();


app.use(cors());
app.use(express.json());

app.post('/api/employee/addEmployee', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newEmployee = new Employee({ name, email });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


app.post('/api/employee/updateProjects', async (req, res) => {
    const { email, projectsGiven, projectsDone } = req.body;
    try {
      const employee = await Employee.findOne({ email });
      if (!employee) return res.status(404).json({ message: 'Employee not found' });
  

      employee.projects_given = projectsGiven;
      employee.projects_done = projectsDone;
  
      
      employee.score = employee.projects_done * 10; 
  
      await employee.save();
      res.status(200).json(employee);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  


mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));


app.listen(5000, () => console.log('Server running on port 5000'));
