const Skills = () => {
    return (
        <article className="skills" id="skills">
            <div className="skills__content">
                <div className="sectionTitle">
                    <div className="sectionTitle__icon">
                        <i className="fa-solid fa-paperclip"></i>
                    </div>
                    <div className="sectionTitle__text bb">SKILLS</div>
                </div>
                <div className="skills__container">
                    <div className="skills__tech-stacks sink-effect">
                        <div className="skills__title">Frontend</div>
                        <img className="skills__img" src={import.meta.env.VITE_IMAGE_URL_FRONT + 'skills/01_frontend.png' + import.meta.env.VITE_IMAGE_URL_BACK}/>
                    </div>
                    <div className="skills__tech-stacks sink-effect">
                        <div className="skills__title">Backend</div>
                        <img className="skills__img" src={import.meta.env.VITE_IMAGE_URL_FRONT + 'skills/02_backend.png' + import.meta.env.VITE_IMAGE_URL_BACK}/>
                    </div>
                    {/* <div className="skills__tech-stacks sink-effect">
                        <div className="skills__title">Mobile App</div>
                        <img className="skills__img" src={import.meta.env.VITE_IMAGE_URL_FRONT + 'skills/logo_android.jpg' + import.meta.env.VITE_IMAGE_URL_BACK}/>
                    </div> */}
                    <div className="skills__tech-stacks sink-effect">
                        <div className="skills__title">Deployment</div>
                        <img className="skills__img" src={import.meta.env.VITE_IMAGE_URL_FRONT + 'skills/04_development.png' + import.meta.env.VITE_IMAGE_URL_BACK}/>
                    </div>
                    <div className="skills__tech-stacks sink-effect">
                        <div className="skills__title">Version Controll</div>
                        <img className="skills__img" src={import.meta.env.VITE_IMAGE_URL_FRONT + 'skills/03_version_controll.png' + import.meta.env.VITE_IMAGE_URL_BACK}/>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default Skills