import { useEffect, useState } from "react";

const PageUpButton = ({
    setExpanded
} : {
    setExpanded : (expanded:boolean) => void 
}) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    const handleClick = () => {
        setExpanded(false)
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
            onClick={handleClick}
            style={scrollPosition < 100 ? {display: "none"} : {}} 
        >
            <img className="pageUpButton__img" src={import.meta.env.VITE_IMAGE_URL_FRONT + 'page-up.svg' + import.meta.env.VITE_IMAGE_URL_BACK} alt=""></img>    
        </div>
    )
}

export default PageUpButton