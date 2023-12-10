import { Avatar, Button, Navbar } from "flowbite-react";


const MenuBar = () => {
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
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MenuBar;