import { NavLink } from "react-router-dom";
import FoodCard from "../components/FoodCard"
const Foods = () => {

const Foods = [
    {
        _id:"1",
        title:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, officia!",
        image:'/images/bg/bg1.jpg',
        category:"veg",
    },
    {
        _id:"1",
        title:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, officia!",
        image:'/images/bg/bg2.jpg',
        category:"non-veg",
    },
    {
        _id:"1",
        title:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, officia!",
        image:'/images/bg/bg3.jpg',
        category:"veg",
    },
    {
        _id:"1",
        title:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, officia!",
        image:'/images/bg/bg4.jpg',
        category:"non-veg",
    },
    {
        _id:"1",
        title:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, officia!",
        image:'/images/bg/bg1.jpg',
        category:"veg",
    },
    {
        _id:"1",
        title:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, officia!",
        image:'/images/bg/bg2.jpg',
        category:"non-veg",
    },
        
]
    return <>
        <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
            <div className='flex flex-col gap-6'>
                <h2 className='text-4xl font-semibold text-center'>Total Foods</h2>
                <div className='w-full items-center justify-center flex flex-wrap gap-4'>
                        {Foods.map((food) => (
                            <FoodCard key={food._id} food={food} img={'/images/Foods/f1.png'}/>
                        ))}
                </div>
                <NavLink
                    to={'/search'}
                    className='text-lg text-teal-500 hover:underline text-center'
                >
                    View all
                </NavLink>
            </div>

            {/**Recommend Foods */}
            <div className='flex flex-col gap-6'>
                <h2 className='text-4xl font-semibold text-center'>Recommend Foods</h2>
                <div className='w-full items-center justify-center flex flex-wrap gap-4'>
                        {Foods.map((food) => (
                            <FoodCard key={food._id} food={food} img={'/images/Foods/f2.png'}/>
                        ))}
                </div>
                <NavLink
                    to={'/search'}
                    className='text-lg text-teal-500 hover:underline text-center'
                >
                    View all
                </NavLink>
            </div>
        </div>
    </>
};
export default Foods;