import { useEffect, useState } from "react";

const useScreen=()=>{
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return scrollPosition
}
export default useScreen;