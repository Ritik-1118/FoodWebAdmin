import { NavLink } from "react-router-dom";
import FoodCard from "../components/FoodCard"
import { useEffect, useState } from "react";
const Foods = () => {
    const [foods,setFoods] = useState([]);

    const getAllFoods = async ()=>{
        const response = await fetch("http://localhost:8001/food/",{
            method:"GET",
        });
        const data = await response.json();
        setFoods(data);
        console.log(data)
    }
    const deleteFood = async (id)=>{
        try {
            const response = await fetch(`http://localhost:8001/food/delete/${id}`,{
                method:"DELETE",
            });
            const data = await response.json();
            console.log(`Food After Delete : ${data}`);
            if(response.ok){
                getAllFoods();
            }
        } catch (error) {
            console.log(error);
        }
    }
    const updateFood = async(id, formData)=>{
        try {
            const response = await fetch(`http://localhost:8001/food/update/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(formData),
            });
            if(response.ok){
                alert("updated Successfully!");
            }else{
                alert("not updated!");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const refreshFoods = async()=>{
        getAllFoods();
    }

    useEffect(()=>{
        getAllFoods();
    },[])

    return <>
        <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
            {/**Total Foods */}
            <div className='flex flex-col gap-6'>
                <h2 className='text-4xl font-semibold text-center'>Total Foods</h2>
                <div className='w-full items-center justify-center flex flex-wrap gap-4'>
                        {foods.map((food) => (
                            <FoodCard 
                                key={food._id} 
                                food={food} 
                                img={food.foodImg[0]} 
                                deleteFood={deleteFood} 
                                updateFood={updateFood} 
                                refreshFoods={refreshFoods}
                            />
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
                        {foods.map((food) => (
                            <FoodCard 
                                key={food._id} 
                                food={food} 
                                img={food.foodImg[2]} 
                                deleteFood={deleteFood} 
                                updateFood={updateFood}
                                refreshFoods={refreshFoods}
                            />
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