import { Outlet } from "react-router-dom";
import MenuBar from "../Components/Navbar/MenuBar";
import SiteFooter from "../Components/Footer/SiteFooter";


const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <SiteFooter></SiteFooter>
        </div>
    );
};

export default MainLayout;