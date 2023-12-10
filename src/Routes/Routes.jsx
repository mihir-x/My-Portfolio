import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";
import Resume from "../Pages/Resume/Resume";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'projects',
                element: <Projects></Projects>
            },
            {
                path: 'skills',
                element: <Skills></Skills>
            },
            {
                path: 'resume',
                element: <Resume></Resume>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default Routes;