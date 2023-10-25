import './App.css';
import FooterComponent from './components/common/Footer';
import NavBar from './components/common/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from './components/section/Hero';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import ErrorComponent from './components/common/Error';
import 'react-multi-carousel/lib/styles.css';
import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './reduxtoolkit/store';
import RestorentMenuCard from './components/cardcomponent/RestorentMenuCard';
function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Outlet />
      <FooterComponent />
    </Provider>
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
        path: "/restaurants/:resId",
        element: <RestorentMenuCard />

      },
    ],
    errorElement: <ErrorComponent />
  },

])
