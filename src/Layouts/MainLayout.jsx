import { Outlet } from "react-router-dom";
import MenuBar from "../Components/Navbar/MenuBar";


const MainLayout = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;