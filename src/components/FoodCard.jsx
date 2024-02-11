import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";


export default function PostCard({food,img}) {
    return <>
        <div className=''>
            <div className='group relative max-w-80 border border-teal-500 hover:border-2 h-[350px] overflow-hidden rounded-lg shadow-lg shadow-gray-900 sm:w-[430px] transition-all'>
                <div className='relative'>
                    <img
                        src={img}
                        alt='food cover'
                        className='h-[200px] w-80 object-cover group-hover:h-[150px] transition-all duration-300 z-20'
                    />
                    <RiDeleteBin6Line className='absolute cursor-pointer text-xl top-0 right-0 mt-2 mr-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto'/>
                </div>
                <div className='p-3 flex flex-col gap-2'>
                    <p className='text-lg font-semibold line-clamp-2'>{'Name'}</p>
                    <div className='flex items-center justify-between'>
                        <p className='text-lgline-clamp-2'>Price: ${10}</p>
                        <p className='text-lgline-clamp-2'>Rating: {4.5}</p>
                    </div>
                    <span className='italic text-md'>{food.category}</span>
                    <Link
                        to={`#`}
                        className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border-t border-t-teal-500 text-teal-900 hover:text-black transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2 flex items-center justify-between'
                    >
                        <div className=''>
                            <button className=' px-4 py-1 mx-8 border border-cyan-500 hover:bg-red-500 rounded-lg'>Update</button></div>
                        <div className=''>
                            <button className=' px-4 py-1 mx-8 border border-cyan-500 hover:bg-teal-700/30 rounded-lg'>Edit</button></div>
                    </Link>
                </div>
            </div>
        </div>
    </>
}