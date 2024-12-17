import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './file.css'
import { Link } from 'react-router-dom';

function Fileview() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/files')
            .then((res) => {
                setFiles(res.data);  
            })
            .catch((err) => {
                console.error('Error fetching files:', err);
            });
    }, []);

    return (
        <>
        <div className='view'>
            <h2>Uploaded Files</h2>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>
                        <a href={`http://localhost:3001/files/${file.file}`} target="_blank" rel="noopener noreferrer">
                            {file.file}
                        </a>
                    </li>
                ))}
            </ul>
        </div><br></br><br></br>
        <Link to='/assignments'><button>back</button></Link><br></br>
        </>
    );
}

export default Fileview;
