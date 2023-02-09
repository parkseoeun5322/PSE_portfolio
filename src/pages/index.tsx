import AboutMe from "../components/aboutMe/aboutMe"
import Archiving from "../components/archiving/archiving"
import Projects from "../components/projects/projects"
import Skills from "../components/skills/skills"
import 'bootstrap/dist/css/bootstrap.css';
import Career from "../components/career/career"
import Footer from "../components/footer"
import PageUpButton from "../components/pageUpButton"
import Gnb from "../components/gnb";
import { useState } from "react";
import MainHead from "../components/mainHead";

const MainPage = () => {
    const [headerHeight, setHeaderHeight] = useState(0)
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <Gnb expanded={expanded} headerHeight={headerHeight} setExpanded={setExpanded} setHeaderHeight={setHeaderHeight}/>
            <MainHead setExpanded={setExpanded} headerHeight={headerHeight}/>
            <AboutMe />
            <Skills />
            <Archiving />
            <Projects />
            <Career /> 
            <PageUpButton setExpanded={setExpanded} />
            <Footer/>       
        </>
    )
}

export default MainPage