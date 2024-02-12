/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function PostCard({food,img,deleteFood,updateFood,refreshFoods}) {
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [formData,setFormData] = useState({
        title: food.title,
        description: food.description,
        price:food.price,
        rating:food.rating,
        holemark:food.holemark,
        category:food.category,
    });
    
    // Update start
    const handleUpdate = async () => {
        setShowUpdateForm(true);
    };
    const handleSaveUpdate = async (e) =>{ 
        e.preventDefault();
        await updateFood(food._id, formData);
        setShowUpdateForm(false);
        await refreshFoods();
    };
    const handleCloseUpdateForm = async() => {
        setShowUpdateForm(false);
        await refreshFoods();
    };
    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    // Update end

    const handleDelete = async () => {
        await deleteFood(food._id);
    };
    
    return <>
        <div className=''>
            <div className='group relative max-w-80 border border-teal-500 hover:border-2 h-[350px] overflow-hidden rounded-lg shadow-lg shadow-gray-900 sm:w-[430px] transition-all'>
                <div className='relative'>
                    <img
                        src={img}
                        alt='food cover'
                        className='h-[200px] w-80 object-cover group-hover:h-[150px] transition-all duration-300 z-20'
                    />
                </div>

                <div className='p-3 flex flex-col gap-2'>
                    {showUpdateForm ? (
                        <>
                            <div className=''>
                                <form >
                                    <div className='text-lg font-semibold line-clamp-2'>
                                        <input type="text" name="title" id="title" value={formData.title} onChange={handleInput} placeholder='title..'/>
                                        <input type="text" name="description" id="description" value={formData.description} onChange={handleInput} placeholder='description'/>
                                    </div>
                                    <div className='flex items-center justify-between text-lgline-clamp-2'>
                                        <input type="text" name="price" id="price" value={formData.price} onChange={handleInput} placeholder='price'/>
                                        <input type="text" name="rating" id="rating" value={formData.rating} onChange={handleInput} placeholder='rating'/>
                                    </div>
                                    <div className="flex items-center justify-between text-lgline-clamp-2">
                                        <input type="text" name="holemark" id="holemark" value={formData.holemark} onChange={handleInput} placeholder='holemark'/>
                                        <input type="text" name="category" id="category" value={formData.category} onChange={handleInput} placeholder='category'/>
                                    </div>
                                    <Link
                                        to={`#`}
                                        className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border-t border-t-teal-500 text-teal-900 hover:text-black transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 flex items-center justify-between'
                                    >
                                        <div className=''>
                                            <button className=' px-4 py-1 mx-8 border border-cyan-500 hover:bg-red-600 hover:text-white rounded-lg' onClick={handleCloseUpdateForm}>cancle</button></div>
                                        <div className=''>
                                            <button type='submit' className=' px-4 py-1 mx-8 border border-cyan-500 hover:bg-teal-700 hover:text-white rounded-lg' onClick={handleSaveUpdate}>save</button></div>
                                    </Link>
                                </form>
                            </div>
                        </>
                    ):(
                        <>
                            <p className='text-lg font-semibold line-clamp-2'>{food.title}</p>
                            <p className='text-lg line-clamp-1'>{food.description}</p>
                            <div className='flex items-center justify-between'>
                                <p className='text-lgline-clamp-2'>Price:{food.price}</p>
                                <p className='text-lgline-clamp-2'>Rating: {food.rating}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className='italic text-md'>{food.holemark}</p>
                                <p className='italic text-md'>{food.category}</p>
                            </div>
                            <Link
                                to={`#`}
                                className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border-t border-t-teal-500 text-teal-900 hover:text-black transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 flex items-center justify-between'
                            >
                                <div className=''>
                                    <button className=' px-4 py-1 mx-8 border border-cyan-500 hover:bg-teal-700 hover:text-white rounded-lg' onClick={handleUpdate}>Update</button></div>
                                <div className=''>
                                    <button className=' px-4 py-1 mx-8 border border-cyan-500 hover:bg-red-600 hover:text-white rounded-lg' onClick={handleDelete}>Delete</button></div>
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </div>
    </>
}