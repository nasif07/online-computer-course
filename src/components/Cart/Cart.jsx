
import PropTypes from 'prop-types';

const Cart = ({addCourses, remaining, totalCredit, totalPrice}) => {
    return (
        <div className='bg-white p-5 rounded-lg'>
            <h1 className='text-[#2F80ED] font-bold text-lg pb-4'>Credit Hour Remaining {remaining} hr</h1>
            <hr />
            <h1 className='text-[#1C1B1B] font-bold text-xl py-4'>Course Name</h1>
            <ol>
                {
                    addCourses.map((course, idx) => (
                        <li className='text-[#1C1B1B99] font-medium text-lg pt-2' key={course.title}>{idx+1} {course.title}</li>
                    ))
                }
               
            </ol>
            <hr className='my-4' />
            <div className="credit">
                <h3 className='text-[#1C1B1B99] font-medium text-lg'>Total Credit Hour : {totalCredit}</h3>
            </div>
            <hr className='my-4' />
            <h3 className='text-[#1C1B1B99] font-medium text-lg'>Total Price : {totalPrice} USD</h3>
        </div>
    );
};

Cart.propTypes = {
    addCourses: PropTypes.array.isRequired,
    remaining: PropTypes.number,
    totalCredit: PropTypes.number,
    totalPrice: PropTypes.number,
}

export default Cart;