import React,{useContext} from 'react';

import './Home.css'; // Assuming you have a Home.css file for styles
import Notes from './Notes';

import noteContext from '../context/noteContext';
export default function Home() {

    return (
        
        <div className="container mt-5" >
            <div className="card  shadow-lg border-0 ">
                <div className="card-body text-center">
                    <h1 className="inner-block display-4 mb-3 text-primary fw-bold">
                        <i className="bi bi-journal-bookmark-fill me-2"></i>
                        Your Notes
                    </h1>
                </div>
            </div>
            
            <Notes/>
        </div>
)
}
