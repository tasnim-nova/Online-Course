import React from 'react';

const Cart = (props) => {
     const total = props.cart.reduce( (total, course) => total+ course.price,0 );

    return (
        <div>
            <h2>Your Courses</h2>
            <h3 className='text-info'>Enrolled Courses: {props.cart.length}</h3>
            <br/>
            <br/>
            <h4 className="text-danger">Course Price Total: {total} </h4>
        </div>
    );
};

export default Cart;