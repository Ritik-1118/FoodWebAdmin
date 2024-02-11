import { IoNotifications, IoReorderThree } from "react-icons/io5";
import { RiMessage3Fill } from "react-icons/ri";


const Header = () => {

    return (
        <nav className="bg-cyan-300/50 p-4 shadow-2xl">
            <div className=" mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className=" flex-shrink-0">
                        <div className='flex items-center justify-between'>
                            <a href='/'>
                                <img className="invert h-12 w-20 ml-4 mr-20" src="/images/admin.png" alt="Logo"/>
                            </a>
                            <div className="ml-8 hidden md:block">
                                <div className="flex items-center space-x-4 text-cyan-700">
                                    <a href="#" className="flex items-center hover:shadow-2xl shadow-teal-700 hover:bg-teal-800/70 hover:text-white px-3 py-1 rounded">
                                        <RiMessage3Fill className='mr-1 text-xl'/>messages
                                    </a>
                                    <a href="#" className="flex items-center hover:shadow-2xl shadow-teal-700 hover:bg-teal-800/70 hover:text-white px-3 py-1 rounded">
                                        <IoNotifications  className='mx-1 text-xl'/>notifications
                                    </a>
                                    <a href="#" className="flex items-center hover:shadow-2xl shadow-teal-700 hover:bg-teal-800/70 hover:text-white px-3 py-1 rounded">
                                        <IoReorderThree className='mr-1 text-xl'/>Services
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
