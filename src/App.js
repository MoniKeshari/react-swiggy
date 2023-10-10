import './App.css';
import FooterComponent from './components/common/Footer';
import NavBar from './components/common/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from './components/section/Hero';

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FooterComponent />
    </>
  );
}

export default App;
