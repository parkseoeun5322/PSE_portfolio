import AboutMe from "../components/aboutMe/aboutMe"
import Archiving from "../components/archiving/archiving"
import Projects from "../components/projects/projects"
import Skills from "../components/skills/skills"
import 'bootstrap/dist/css/bootstrap.css';
import Career from "../components/career/career"
import Footer from "../components/footer"
import PageUpButton from "../components/pageUpButton"

const MainPage = () => {
    return (
        <>
            {/* <MainHead />*/}
            <AboutMe />
            <Skills />
            <Archiving />
            <Projects />
            <Career /> 
            <PageUpButton />
            <Footer/>       
        </>
    )
}

export default MainPage