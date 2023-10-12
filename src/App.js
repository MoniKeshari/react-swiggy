import './App.css';
import FooterComponent from './components/common/Footer';
import NavBar from './components/common/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from './components/section/Hero';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import ErrorComponent from './components/common/Error';
import RestaurantMenu from './components/Pages/RestaureantMenu';
import 'react-multi-carousel/lib/styles.css';
function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default App;

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroSection />

      },
      {
        path: "/about",
        element: <About />,

      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:res_id",
        element: <RestaurantMenu />

      },
    ],
    errorElement: <ErrorComponent />
  },



])
