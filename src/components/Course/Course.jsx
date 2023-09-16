import { FaBookOpen, FaDollarSign } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Course = ({courses, handleAddToBookmark}) => {
    const {image, title, course_details, price, credit} = courses;
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <img className="cles h-40 w-5/6 mt-7 m-auto rounded-lg" src={image} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{title}</h2>
                    <p className="text-[#1C1B1B99]">{course_details}</p>
                    <div className="flex justify-between">
                        <p className='flex items-center gap-3'><FaDollarSign></FaDollarSign> <span className="text-[#1C1B1B99] font-medium text-lg">Price: {price}</span></p>
                        <p className="text-[#1C1B1B99] font-medium text-lg flex items-center gap-3"><FaBookOpen/>Credit: {credit} hr</p>
                    </div>
                    <button onClick={() => handleAddToBookmark(courses)} className="btn btn-primary mt-3">Buy Now</button>
                </div>
            </div>
        </>
    );
};


Course.propTypes = {
    courses: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}


export default Course;