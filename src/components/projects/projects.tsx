import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import projectsData from "../../db/projects.json"
import projectType from "../../db/projectType.json"
import { Project } from '../../db/type';
import ProjectDetail from './projectsDetail';
import ReadMe from './readme';

const Projects = () => {
    const [show, setShow] = useState(false);
    const [projectData, setProjectData] = useState<Project | null>(null)

    const handleClick = (data:Project) => () => {
        setShow(true)
        setProjectData(data)
    }

    const lastTypeId = (projectType.length - 1).toString()

    return (
        <>
        <article className="projects" id="projects">
            <div className="projects__content">
                <div className="sectionTitle">
                    <div className="sectionTitle__icon">
                        <i className="fa-solid fa-paperclip w"></i>
                    </div>
                    <div className="sectionTitle__text wg">PROJECTS</div>
                </div>
                <Accordion defaultActiveKey={lastTypeId}>
                {projectType.map((type) => (
                    <Accordion.Item eventKey={type.id} key={type.id}>
                        <Accordion.Header>
                            <span className="accordion-button-category">{type.category}</span>
                            { !type.period ? (
                                <></>
                            ) : (
                                <span className="accordion-button-period">({type.period})</span>
                            )}
                        </Accordion.Header>
                        <Accordion.Body>
                        {projectsData.filter((data: Project)=> data?.category === type.id).map((data) => (
                            <ProjectDetail projectData={data} readMeClick={handleClick} key={data.id} />
                        ))}  
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                </Accordion>          
            </div>
        </article>
        <ReadMe show={show} projectData={projectData} handleClose={() => setShow(false)} />
        </>
    )
}

export default Projects