import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  projects_given: { type: Number, default: 0 },
  projects_done: { type: Number, default: 0 },
  score: { type: Number, default: 0 },
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
