import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MainHead from "./mainHead";

const Gnb = () => {
    const headerRef = useRef<HTMLHeadElement>(null)
    const [headerHeight, setHeaderHeight] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [expanded, setExpanded] = useState(false);

    const handleUpdateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    const handlePage = () => {
        if (!headerRef.current === null) return
        const value = headerRef.current!.offsetHeight as number
        setHeaderHeight(value)
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
            <MainHead expanded={expanded} setExpanded={setExpanded}/>
        </>
    )
}

export default Gnb