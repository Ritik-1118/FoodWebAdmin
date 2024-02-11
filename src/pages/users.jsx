import { NavLink } from "react-router-dom";

const Users = () => {
    const users = [
        {
            userName:"User1",
            email:"test1@gmail.com",
            phone:"90779842019",
        },
        {
            userName:"User1",
            email:"test1@gmail.com",
            phone:"90779842019",
        },
        {
            userName:"User1",
            email:"test1@gmail.com",
            phone:"90779842019",
        },
        {
            userName:"User1",
            email:"test1@gmail.com",
            phone:"90779842019",
        },
        {
            userName:"User1",
            email:"test1@gmail.com",
            phone:"90779842019",
        },
        {
            userName:"User1",
            email:"test1@gmail.com",
            phone:"90779842019",
        },
        {
            userName:"User1",
            email:"test1@gmail.com",
            phone:"90779842019",
        },
        {
            userName:"User1",
            email:"test1@gmail.com",
            phone:"90779842019",
        },
    ]

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
                            <td className=" px-4 py-6 font-bold text-2xl">Phone</td>
                            <td className=" px-4 py-6 font-bold text-2xl">Update</td>
                            <td className=" px-4 py-6 font-bold text-2xl">Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((curr,index)=>{
                            return (
                                <tr key={index} className=" shadow-lg hover:shadow-lg hover:shadow-zinc-900">
                                    <td key={index} className=" px-4 py-4">{curr.userName}</td>
                                    <td key={index} className=" px-4 py-4">{curr.email}</td>
                                    <td key={index} className=" px-4 py-4">{curr.phone}</td>
                                    <td key={index} className=" px-4 py-4">
                                    <NavLink to={`/admin/users/${curr._id}/edit`}>Edit</NavLink></td>
                                    <td key={index} className=" px-4 py-4"><button >Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
};
export default Users;