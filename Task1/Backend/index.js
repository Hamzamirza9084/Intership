import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';

import cors from 'cors';

const app = express();


app.use(cors());

app.use(express.json());
app.use('/files', express.static('public/uploads')); 


mongoose.connect('mongodb://127.0.0.1:27017/filedb')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB Connection Error:', err));


const fileSchema = new mongoose.Schema({
    file: { type: String, required: true } 
});

const File = mongoose.model('File', fileSchema);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads'); 
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); 
    }
});

const upload = multer({ storage: storage });


app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const newFile = await File.create({ file: req.file.filename }); 
        res.status(201).json({ message: 'PDF uploaded successfully', data: newFile });
    } catch (err) {
        console.error('Error during PDF upload:', err);
        res.status(500).json({ error: 'Failed to upload file', message: err.message });
    }
});


app.get('/files', async (req, res) => {
    try {
        const files = await File.find(); 
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch files' });
    }
});


app.listen(3001, () => console.log('Server running on port 3001'));
