import React from 'react';

const Cart = (props) => {
    let total =0;
    for (let i=0; i< props.cart.length; i++){
        const course = props.cart[i];
        total = parseFloat(total)+ parseFloat(course.price);
    }
    return (
        <div className='float-lg-right'>
            <h2>Your Courses</h2>
            <h3 className='text-info'>Enrolled Courses: {props.cart.length}</h3>
            <br/>
            <br/>
            <h4 className="text-danger">Course Price Total: ${total.toFixed(2)} </h4>
            <button className="btn btn-info">Purchase Here</button>
        </div>
    );
};

export default Cart;