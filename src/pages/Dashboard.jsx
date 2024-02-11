import { Outlet } from "react-router-dom";
import SlideBar from "../components/Layouts/SlideBar";
// import Traffic from "../components/Layouts/Traffic";

const Dashboard = () => {
    return<>
        <section>
            <div className="grid grid-cols-6">
                <div className="max-w-64"><SlideBar /></div>
                <div className=" col-span-5 w-full border"><Outlet /></div>
            </div>
        </section>
    </> 
};
export default Dashboard;