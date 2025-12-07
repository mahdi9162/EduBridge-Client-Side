import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/public/Home/Home';
import TuitionsList from '../pages/public/Tuitions/TuitionsList';
import TutorsList from '../pages/public/Tutors/TutorsList';
import About from '../pages/public/About/About';
import Contact from '../pages/public/Contact/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'tuitions',
        Component: TuitionsList,
      },
      {
        path: 'tutors',
        Component: TutorsList,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'contact',
        Component: Contact,
      },
    ],
  },
]);
