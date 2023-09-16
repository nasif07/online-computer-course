
import { useEffect, useState } from 'react'
import Course from '../Course/Course';
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Home = () => {
    const [courses, setCourses] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    const [addCourses, setAddCourses] = useState([]);

    const handleAddToBookmark = (item) => {
        const isExist = addCourses.find((isExistItem) => isExistItem.title == item.title);
        let count = item.credit;
        let price = item.price;
        if (isExist) {
            toast('You already added this course in cart!!!')
        }
        else {
            addCourses.forEach((item) => {
                count = count + item.credit
                price = price + item.price
            })
            const remaining = 20 - count;
            if (count > 20) {
                toast('You cross the credit limitation and your remaining hour is insufficient.')
            }
            else {
                setTotalCredit(count);
                setRemaining(remaining);
                setTotalPrice(price);
                setAddCourses([...addCourses, item])
            }

        }



    }
    return (
        <div className="mx-24 pb-12 flex gap-6">
            <ToastContainer className={top}></ToastContainer>
            <div className="w-2/3 card-container grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    courses.map(courses => <Course handleAddToBookmark={handleAddToBookmark} key={courses.title} courses={courses}></Course>)
                }
            </div>
            <div className="cart w-1/3">
                <Cart remaining={remaining} totalCredit={totalCredit} totalPrice={totalPrice} addCourses={addCourses}></Cart>

            </div>
        </div>
    );
};

export default Home;