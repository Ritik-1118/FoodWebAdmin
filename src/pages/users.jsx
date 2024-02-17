import { useEffect, useState } from "react";

const Users = () => {
    const [users,setUsers] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const autheader = `Bearer ${token}`;


    const getAllUsers = async() =>{
        const response = await fetch("http://localhost:8001/user/",{
            method:"GET",
            headers: {
                Authorization: autheader,
            },
        });
        if (response.ok) {
            const data = await response.json();
            setUsers(data);
        }
    };
    const deleteUser = async(id) =>{
        try {
            const response = await fetch(`http://localhost:8001/user/delete/${id}`,{
                method:"DELETE",
                headers: {
                    Authorization: autheader,
                },
            });
            if (response.ok) {
                const data = await response.json();
                getAllUsers();
                alert(`user ${data.user.username} Deleted!`)
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(()=>{
        getAllUsers();
    },[])
    return <>
        <div className="text-black/80 dark:bg-white/50 min-h-screen">
            <div className=" text-5xl text-center font-bold py-4 bg-white/50 min-w-full  border-gray-600 rounded-xl">
                Users
            </div>
            <div className=" ">
                <table className="table-auto min-w-full">
                    <thead>
                        <tr className=" bg-white/50 shadow-2xl shadow-gray-800">
                            <td className=" px-4 py-6 font-bold text-2xl">Name</td>
                            <td className=" px-4 py-6 font-bold text-2xl">Email</td>
                            <td className=" px-4 py-6 font-bold text-2xl">IsAdmin</td>
                            <td className=" px-4 py-6 font-bold text-2xl">Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((curr,index)=>{
                            return (
                                <>
                                    <tr key={index} className=" shadow-lg hover:shadow-lg hover:shadow-zinc-900">
                                        <td key={index} className=" px-4 py-4">{curr.username}</td>
                                        <td key={index} className=" px-4 py-4">{curr.email}</td>
                                        <td key={index} className=" px-4 py-4">
                                            {curr.isadmin ?(
                                                <span>true</span>
                                            ):(
                                                <span>false</span>
                                            )}
                                        </td>
                                        <td key={index} className=" px-4 py-4"><button className="hover:bg-red-500/80 hover:shadow-2xl rounded-lg px-2 py-1" onClick={()=>deleteUser(curr._id)}>Delete</button></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
};
export default Users;