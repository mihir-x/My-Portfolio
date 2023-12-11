import { Outlet } from "react-router-dom";
import MenuBar from "../Components/Navbar/MenuBar";
import SiteFooter from "../Components/Footer/SiteFooter";


const MainLayout = () => {
    return (
        <div className="">
            <MenuBar></MenuBar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <SiteFooter></SiteFooter>
        </div>
    );
};

export default MainLayout;