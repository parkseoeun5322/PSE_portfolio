import { useState, MouseEvent, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import projectsData from "../../db/projects.json"
import projectType from "../../db/projectType.json"
import { Project } from '../../db/type';
import ProjectDetail from './projectsDetail';
import ReadMe from './readme';

const Projects = () => {
    const [show, setShow] = useState(false);
    const [projectData, setProjectData] = useState<Project | null>(null)
    const [activeHeader, setActiveHeader] = useState<HTMLElement | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        const headerHeight = document.getElementsByClassName('gnb')[0].clientHeight + 1         // 헤더 높이
        const accordionBtnList = document.getElementsByClassName('accordion-button')            // accordion 헤더 버튼
        const accordionCollapseList = document.getElementsByClassName('accordion-collapse')     // accordion body
        const activeAccordion = Array.from(accordionBtnList).find(                              // 활성화 accordion 헤더 버튼
            (btn) => !btn.classList.contains('collapsed')
        )
        const showCollapse = Array.from(accordionCollapseList).find(                            // 활성화 accordion body
            (item) => item.classList.contains('show')
        )

        setScrollPosition(window.scrollY || document.documentElement.scrollTop);                // 현재 스크롤 저장

        if(activeAccordion && showCollapse) {
            let showCollapseTop = showCollapse.getBoundingClientRect().top + window.scrollY - headerHeight
            let showCollapseBottom = showCollapse.getBoundingClientRect().bottom + window.scrollY - headerHeight - activeAccordion.clientHeight

            if(showCollapseTop < scrollPosition && showCollapseBottom > scrollPosition ) {
                activeAccordion.closest('.accordion-header')?.classList.add("fixed")
            } else {
                activeAccordion.closest('.accordion-header')?.classList.remove("fixed")
            }
        }
        // console.log("scrollPosition:", scrollPosition)
    }

    const handleClick = (data:Project) => () => {
        setShow(true)
        setProjectData(data)
    }

    const headerClick = (event: MouseEvent<HTMLDivElement>) => {
        const clickedHeader = event.currentTarget      // 클릭한 Header 요소
        const headerHeight = document.getElementsByClassName('gnb')[0].clientHeight + 1         // 헤더 높이
        const accordion = document.getElementsByClassName('accordion')[0]
        const accordionTop = accordion.getBoundingClientRect().top + window.scrollY - headerHeight
        const headerList = document.getElementsByClassName('accordion-header')

        // fixed된 헤더 제거
        Array.from(headerList).forEach((header) => { header.classList.remove('fixed') })

        // accordion 영역으로 스크롤 이동
        setTimeout(() => {
            window.scrollTo({
                top: accordionTop,
                behavior: 'smooth'
            })
        }, 300);    // 클래스 제거 후 updateScroll() 실행할 수 있도록 함
    };

    const lastTypeId = (projectType.length - 1).toString()

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

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
                <Accordion defaultActiveKey={lastTypeId} flush>
                {projectType.map((type) => (
                    <Accordion.Item eventKey={type.id} key={type.id}>
                        <Accordion.Header onClick={headerClick}>
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