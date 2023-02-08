import { useState } from "react";
import { Button, Carousel } from "react-bootstrap"
import { Project } from "../../db/type"

const ProjectDetail = ({
    projectData,
    readMeClick
}:{
    projectData: Project
    readMeClick: (data:Project) => () => void
}) => {
    return (
        (typeof projectData === 'undefined' || projectData === null) ? (
            <div className="projects__project"><div className="projects__title">등록된 정보가 없습니다.</div></div>
        ) : (
            <div className={"projects__project " + (projectData.category !== "2" ? 'removeMargin' : '')}>
                <div className="projects__title">{projectData.name}</div>
                <div className="projects__period">{projectData.period} &nbsp; ({projectData.authority})</div>
                <div className="projects__info">
                    <div className="projects__img-carousel">
                        <Carousel variant="dark">
                            {projectData.image_url.map((image) =>                                
                                <Carousel.Item key={image}>
                                    <img
                                    className="d-block w-100"
                                    src={image}
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel>                        
                    </div>
                    <div className="projects__descriptions">
                        <div className="projects__main-description">
                            <div dangerouslySetInnerHTML={{__html: projectData.summary}}></div>
                            <div className="projects__readme">
                                <Button className="btn btn-dark" onClick={readMeClick(projectData)}>자세히 보기 ▶ README</Button>
                            </div>
                        </div>
                        <div className="projects__description">
                            <div className="projects__description-label"><i className="fa-solid fa-square-check"></i>주요기능</div>
                            <div className="projects__description-value">
                                <ul>
                                    {projectData.main_function.map((data) => <li key={data}>{data}</li>)}
                                </ul>
                            </div>
                        </div>
                        { !projectData.github ? (
                            <div></div>
                        ) : (
                            <div className="projects__description">
                                <div className="projects__description-label"><i className="fa-solid fa-square-check"></i>github</div>
                                <div className="projects__description-value"><a href={projectData.github} target="_blank">{projectData.github}</a></div>
                            </div>
                        )}   
                        {   !projectData.url ? (
                            <div></div>
                        ) : (
                            <div className="projects__description">
                                <div className="projects__description-label"><i className="fa-solid fa-square-check"></i>url</div>
                                <div className="projects__description-value"><a href={projectData.url} target="_blank">{projectData.url}</a></div>
                            </div>   
                        )}
                        { projectData.type === 'WEB' ? (
                            <>
                                <div className="projects__description">
                                    <div className="projects__description-label"><i className="fa-solid fa-square-check"></i>Frontend</div>
                                    <div className="projects__description-value">{projectData.frontend}</div>
                                </div>
                                <div className="projects__description">
                                    <div className="projects__description-label"><i className="fa-solid fa-square-check"></i>Backend</div>
                                    <div className="projects__description-value">{projectData.backend}</div>
                                </div>
                            </>
                        ) : (
                            <div className="projects__description">
                                <div className="projects__description-label"><i className="fa-solid fa-square-check"></i>Mobile App</div>
                                <div className="projects__description-value">{projectData.mobile_app}</div>
                            </div>
                        )}
                        <div className="projects__description">
                            <div className="projects__description-label"><i className="fa-solid fa-square-check"></i>Database</div>
                            <div className="projects__description-value">{projectData.database}</div>
                        </div>
                        <div className="projects__description">
                            <div className="projects__description-label"><i className="fa-solid fa-square-check"></i>Deployment</div>
                            <div className="projects__description-value">{projectData.deployment}</div>
                        </div>                                         
                    </div>
                </div>
            </div>
        )
    )
}

export default ProjectDetail