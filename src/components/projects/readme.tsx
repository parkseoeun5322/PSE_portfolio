import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Project } from '../../db/type';

const ReadMe = ({
    show, 
    handleClose,
    projectData
}: {
    show:boolean
    handleClose: () => void
    projectData:Project
}) => {
    return (
        <div className="readme">
            <Modal 
                show={show} 
                onHide={handleClose} 
                fullscreen={true}  
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title><b>README.md</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        { (typeof projectData === 'undefined' || projectData === null) ? (
                            <div>등록된 정보가 없습니다.</div>
                        ) : (
                            <article className="markdown-body entry-content container-lg" itemProp="text">
                                <h1 className="readme__title">{projectData.name}</h1>
                                { !projectData.url ? (
                                    <p></p>
                                ) : (
                                    <>
                                    <h4 className="readme__sub-title">
                                        <i className="fa-solid fa-link" style={{color: "#7a7a7a"}}></i>Deployment URL</h4>
                                    <p className="readme__text"><a href={projectData.url} target="_blank">{projectData.url}</a></p>
                                    </>
                                )}
                                <h4 className="readme__sub-title">
                                    <i className="fa-solid fa-thumbtack" style={{color: "#f73e3e"}}></i>Summary
                                </h4>
                                <p className="readme__text" dangerouslySetInnerHTML={{__html: projectData.summary}}></p>
                                <h4 className="readme__sub-title">
                                    <i className="fa-solid fa-gear" style={{color: "#8000ff"}}></i>Main Function
                                </h4>
                                <ul className="readme__text">
                                    {projectData.main_function.map((data, index) => <li key={index}>{data}</li>)}
                                </ul>
                                <h4 className="readme__sub-title">
                                    <i className="fa-solid fa-cheese" style={{color: "#f7af05"}}></i>My Part
                                </h4>
                                <ul className="readme__text">
                                    {projectData.my_part.map((data, index) => <li key={index}>{data}</li>)}
                                </ul>
                                <h4 className="readme__sub-title">
                                    <i className="fa-solid fa-hands-clapping" style={{color: "#2aba02"}}></i>Meaning
                                </h4>
                                <p className="readme__text" dangerouslySetInnerHTML={{__html: projectData.meaning}}></p>
                                <h4 className="readme__sub-title">
                                    <i className="fa-solid fa-screwdriver-wrench" style={{color: "#055af7"}}></i>Technology Stack(s)
                                </h4>
                                <ul className="readme__text">
                                    { projectData.type === 'WEB' ? (
                                        <>
                                            <li>Frontend : {projectData.frontend}</li>
                                            <li>Backend : {projectData.backend}</li>
                                        </>

                                    ) : (
                                        <li>Mobile App : {projectData.mobile_app}</li>
                                    )}
                                    <li>Database : {projectData.database}</li>
                                    <li>Deployment : {projectData.deployment}</li>
                                </ul> 
                            </article>
                        )}
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn_close" variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ReadMe;