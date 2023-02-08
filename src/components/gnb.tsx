import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MainHead from "./mainHead";

const Gnb = ({
    expanded,
    headerHeight,
    setExpanded,
    setHeaderHeight
} : {
    expanded: boolean
    headerHeight: number
    setExpanded : (expanded:boolean) => void   
    setHeaderHeight: (headerHeight: number) => void 
}) => {
    const headerRef = useRef<HTMLHeadElement>(null)
    const [scrollPosition, setScrollPosition] = useState(0)

    const handleUpdateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    const handlePage = () => {
        setTimeout(()=>{ 
            if (!headerRef.current === null) return
            const value = headerRef.current!.clientHeight as number
            setHeaderHeight(value)
        }, 200)
        
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleUpdateScroll)
        handlePage()
    },[])
        
    return (
        <>
            <header 
                ref={headerRef}
                className={scrollPosition < 100 ? "gnb" : "gnb change-bg"}
            >
                <Navbar 
                    onToggle={(expanded) => {setExpanded(expanded)}}
                    expanded={expanded} className="gnb__content" expand="xxl">
                    <Container fluid>
                        <div className="gnb__title"><Link onClick={() => setExpanded(false)} to="root">PSE's Portfolio</Link></div>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    style={{ maxHeight: '300px' }}
                                    navbarScroll
                                    >
                                    <div className="gnb__navigation-menu"><Link onClick={() => setExpanded(false)} to="about-me" offset={-headerHeight}>About me</Link></div>
                                    <div className="gnb__navigation-menu"><Link onClick={() => setExpanded(false)} to="skills" offset={-headerHeight}>Skills</Link></div>
                                    <div className="gnb__navigation-menu"><Link onClick={() => setExpanded(false)} to="archiving" offset={-headerHeight}>Archiving</Link></div>
                                    <div className="gnb__navigation-menu"><Link onClick={() => setExpanded(false)} to="projects" offset={-headerHeight}>Projects</Link></div>
                                    <div className="gnb__navigation-menu"><Link onClick={() => setExpanded(false)} to="career" offset={-headerHeight}>Career</Link></div>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <MainHead setExpanded={setExpanded} headerHeight={headerHeight}/>
        </>
    )
}

export default Gnb