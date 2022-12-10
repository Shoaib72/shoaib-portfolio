import { createBrowserRouter } from 'react-router-dom';
import AboutMe from '../Components/AboutMe/AboutMe';
import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';
import Projects from '../Components/Projects/Projects';
import Main from '../Layout/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/aboutme',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
]);

export default router;