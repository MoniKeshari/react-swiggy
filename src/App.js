import './App.css';
import FooterComponent from './components/common/Footer';
import NavBar from './components/common/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from './components/section/Hero';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import ErrorComponent from './components/common/Error';
import RestaurantMenu from './components/Pages/RestaureantMenu';
import 'react-multi-carousel/lib/styles.css';
import { lazy, Suspense } from 'react';
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
const Grocery=lazy(()=>import("./components/grocerycomponent/Groceory"))
const About=lazy(()=>import("./components/Pages/About"))

const Contact=lazy(()=>import("./components/Pages/Contact"))


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
        element:<Suspense fallback={<h1>loading...</h1>}><About /></Suspense> 

      },
      {
        path: "/contact",
        element: <Suspense fallback={<h1>loading...</h1>}><Contact /></Suspense>
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<><h1>loading.....</h1></>}> <Grocery /></Suspense>
      },
      {
        path: "/restaurants/:res_id",
        element: <RestaurantMenu />

      },
    ],
    errorElement: <ErrorComponent />
  },



])
