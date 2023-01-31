import React from 'react';
import './ListOfSubjects.scss';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const ListOfSubjects = () => {
    const navigate = useNavigate();


    return (
        <>
            <div className='list-of-subjects'>
                <h1>Lista przedmiotów</h1>
                <button onClick={() => navigate('/biologia')}>Biologia</button>
                <button onClick={() => navigate('/chemia')}>Chemia</button>
            </div>
        </>
    )
};

export default ListOfSubjects;