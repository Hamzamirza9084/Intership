import React, { useState } from 'react';
import axios from 'axios';
import './Assignment.css';  
import { Link } from 'react-router-dom';

function Assignment() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) {
            alert('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:3001/upload', formData)
            .then((res) => {
                alert('File uploaded successfully');
            })
            .catch((err) => {
                console.error('Error during file upload:', err);
                alert('Failed to upload file');
            });
    };

    return (
        <>
        <div className="card">
            <h2 className="card__title">Upload PDF File</h2>
            <div className="card__content">
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="file"
                />
            </div>
            <button className="card__button" onClick={handleUpload}>
                Upload
            </button><br></br><br></br>
            <Link to='/assignments'><button>Back</button></Link><br></br>
        </div>
        </>
      
    );
}

export default Assignment;
