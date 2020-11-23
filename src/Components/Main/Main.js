import React from 'react';
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArchive } from '@fortawesome/free-solid-svg-icons';


const Main = (props) => {
    return (
        <div className='main-component container'>
            <h2> {props.course.id}.Course Title:<strong> Online Course on-{props.course.course_name}</strong></h2>
            <p>Course By : {props.course.university}                         </p> 
            <br/>
            <h3>Price: ${props.course.price}</h3>
            <small>{props.course.features}</small>
            <br/>
            <br/>
            < button type="button" class="btn btn-info"
            onClick={() => { props.handleAddCourse(props.course)}}
            > <FontAwesomeIcon icon={faArchive} />  Enrol Now!!</button>
        </div>
    );
};

export default Main;