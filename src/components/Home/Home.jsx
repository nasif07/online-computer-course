
import { useEffect, useState } from 'react'
import Course from '../Course/Course';
import Cart  from "../Cart/Cart";

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="mx-12 flex">
            <div className="w-2/3 card-container grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {
                        courses.map(course => <Course key={course.title} course={course}></Course>)
                    }
            </div>
            <div className="cart w-1/3">
                <Cart></Cart>

            </div>
        </div>
    );
};

export default Home;