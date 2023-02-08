import { useEffect, useState } from "react";

const PageUpButton = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <div 
            className="pageUpButton" 
            onClick={scrollToTop}
            style={scrollPosition < 100 ? {display: "none"} : {}} 
        >
            <img className="pageUpButton__img" src="/src/assets/images/page-up.svg" alt=""></img>    
        </div>
    )
}

export default PageUpButton