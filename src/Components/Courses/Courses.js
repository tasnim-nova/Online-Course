import React from 'react';
import {useState, useEffect} from 'react';
import './Courses.css'
import Main from '../Main/Main'
import fakeData from '../../fakeData/MOCK_DATA.json';
import Cart from '../Cart/Cart';

const Courses = () => {
    console.log(fakeData);
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart]= useState([]);


    const handleAddCourse = (course) =>{
        console.log('Course Added', course);
        const newCart = [...cart, course];
        setCart(newCart);
    }
        return (
        <div>
             <div className=" row">
                 <div className="course-container col-8">
                 {
                     courses.map(course => <Main 
                        handleAddCourse={handleAddCourse}
                        course={course} >Course Title: </Main>)
                 }
               
                 </div>

                 <div className="cart-container col-4 ">
                 <div className="container">
                 <Cart cart={cart}></Cart>
                 </div>

                 </div>
             </div>

        </div>
    );
};

export default Courses;