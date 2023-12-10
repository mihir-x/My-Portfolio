import { Avatar, Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";


const MenuBar = () => {

    const navLinks = <>
        <NavLink to='/' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Home</NavLink>
        <NavLink to='' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Projects</NavLink>
        <NavLink to='' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Skills</NavLink>
        <NavLink to='' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Resume</NavLink>
        <NavLink to='' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>About Myself</NavLink>
        <NavLink to='' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Contact Me</NavLink>
    </>

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="">
                <Avatar alt="Profile Picture" img="https://i.ibb.co/xSPstNc/117906972-3169262489787483-6576742553123866123-n.jpg" rounded />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MIHIR HASAN</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>Download Resume</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {navLinks}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MenuBar;