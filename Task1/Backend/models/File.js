import mongoose from 'mongoose';

const { Schema } = mongoose;

const fileSchema = new Schema({
    id: { type: Number, unique: true, required: true }, 
    file: { type: String, required: true } 
});

export default mongoose.model('File', fileSchema);
