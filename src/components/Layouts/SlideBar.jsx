import { IoMdLogOut } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { FaRegUserCircle,FaShopify } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";
import { TbAlertOctagonFilled } from "react-icons/tb";


import { NavLink } from "react-router-dom";

const SlideBar = () => {
    return <>
        <div className=" max-w-64 z-50 flex h-screen bg-cyan-800">
        {/* Sidebar */}
            <div className="w-full bg-cyan-200/30">
                <div className="flex flex-col items-center justify-between h-full py-4">
                    <div className="w-full">
                        <div className="mt-6 mx-4 text-2xl">
                            <NavLink to={'/'}>
                                <div className="mb-4 mt-10 py-2 w-full cursor-pointer hover:bg-white/10 shadow-sm shadow-gray-700 hover:shadow-2xl rounded-lg">
                                    <div className=" px-4 py-1 text-gray-100 hover:text-white flex items-center justify-center">
                                        <AiFillPieChart />&nbsp;Dashboard
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to={'/users'}>
                                <div className="mb-4 mt-10 py-1 w-full cursor-pointer hover:bg-white/10 shadow-sm shadow-gray-700 hover:shadow-2xl rounded-lg">
                                    <div className="px-4 py-2 text-gray-100 hover:text-white flex items-center justify-center">
                                        <FaRegUserCircle className=""/>&nbsp;Users
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to={'/foods'}>
                                <div className="mb-4 mt-10 py-1 w-full cursor-pointer hover:bg-white/10 shadow-sm shadow-gray-700 hover:shadow-2xl rounded-lg">
                                    <div className="px-4 py-2 text-gray-100 hover:text-white flex items-center justify-center">
                                        <PiHamburgerFill className=""/>&nbsp;Foods
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to={'/orders'}>
                                <div className="mb-4 mt-10 py-1 w-full cursor-pointer hover:bg-white/10 shadow-sm shadow-gray-700 hover:shadow-2xl rounded-lg">
                                    <div className="px-4 py-2 text-gray-100 hover:text-white flex items-center justify-center">
                                        <FaShopify className=""/>&nbsp;Orders
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to={'/alerts'}>
                                <div className="mb-4 mt-10 py-1 w-full cursor-pointer hover:bg-white/10 shadow-sm shadow-gray-700 hover:shadow-2xl rounded-lg">
                                    <div className="px-4 py-2 text-gray-100 hover:text-white flex items-center justify-center">
                                        <TbAlertOctagonFilled className=""/>&nbsp;Alerts
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to={'/logout'}>
                                <div className="mb-4 mt-10 w-full border cursor-pointer hover:bg-red-500/70 hover:shadow-2xl rounded-lg">
                                    <div className=" py-2 text-gray-100 hover:text-white flex items-center justify-center">
                                    Logout &nbsp;<IoMdLogOut className=" text-2xl"/>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default SlideBar;
