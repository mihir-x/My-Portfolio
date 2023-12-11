// import axios from "axios";
import { Avatar, Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";


const MenuBar = () => {

    const navLinks = <>
        <NavLink to='/' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Home</NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Projects</NavLink>
        <NavLink to='/skills' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Skills</NavLink>
        <NavLink to='/resume' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Resume</NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>About Myself</NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? ' font-bold underline text-green-500 ' : ''}>Contact Me</NavLink>
    </>

    // const handleDownload = async () => {
    //     try {
    //         // Replace 'YOUR_GOOGLE_DRIVE_LINK' with the actual link to your PDF file
    //         const response = await axios.get('https://drive.google.com/file/d/1eTSxEW6aydo-nA-AdJZ4dpoXnl7-6_pz/view?usp=drive_link', {
    //             responseType: 'blob',
    //         });

    //         // Create a Blob from the response data
    //         const blob = new Blob([response.data], { type: 'application/pdf' });

    //         // Create a link element, set the href to the blob, and trigger a download
    //         const link = document.createElement('a');
    //         link.href = window.URL.createObjectURL(blob);
    //         link.download = 'downloaded_file.pdf';
    //         document.body.appendChild(link);
    //         link.click();

    //         // Remove the link from the DOM
    //         document.body.removeChild(link);
    //     } catch (error) {
    //         console.error('Error downloading PDF:', error);
    //     }
    // };
    // const handleDownload = () => {
    //     fetch("https://drive.google.com/uc?export=download&id=1eTSxEW6aydo-nA-AdJZ4dpoXnl7-6_pz").then((response) => {
    //         response.blob().then((blob) => {

    //             // Creating new object of PDF file
    //             const fileURL =
    //                 window.URL.createObjectURL(blob);

    //             // Setting various property values
    //             let alink = document.createElement("a");
    //             alink.href = fileURL;
    //             alink.download = "resume.pdf";
    //             alink.click();
    //         });
    //     });

        // const pdfPath = '/public/resume.pdf';

        // // Create an anchor element
        // const anchor = document.createElement('a');
    
        // // Set the href attribute to the path of the PDF file
        // anchor.href = pdfPath;
    
        // // Set the download attribute to specify the desired file name
        // anchor.download = 'sample.pdf';
    
        // // Simulate a click on the anchor element to trigger the download
        // anchor.click();
    // }

    return (
        <Navbar fluid rounded className="shadow-lg">
            <Navbar.Brand href="">
                <Avatar alt="Profile Picture" img="https://i.ibb.co/xSPstNc/117906972-3169262489787483-6576742553123866123-n.jpg" rounded />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MIHIR HASAN</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button><a href="https://drive.google.com/uc?export=download&id=1eTSxEW6aydo-nA-AdJZ4dpoXnl7-6_pz" download='mihir.pdf'>Download Resume</a></Button>
                
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {navLinks}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MenuBar;