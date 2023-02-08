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
                        <img className="skills__img" src="https://github.com/parkseoeun5322/PSE_portfolio/blob/main/src/assets/images/skills/frontend.png"/>
                    </div>
                    <div className="skills__tech-stacks sink-effect">
                        <div className="skills__title">Backend</div>
                        <img className="skills__img" src="/src/assets/images/skills/backend.png"/>
                    </div>
                    <div className="skills__tech-stacks sink-effect">
                        <div className="skills__title">Mobile App</div>
                        <img className="skills__img" src="/src/assets/images/skills/logo_android.jpg"/>
                    </div>
                    <div className="skills__tech-stacks sink-effect">
                        <div className="skills__title">Deployment</div>
                        <img className="skills__img" src="/src/assets/images/skills/deployment.png"/>
                    </div>
                    <div className="skills__tech-stacks sink-effect">
                        <div className="skills__title">Version Controll</div>
                        <img className="skills__img" src="/src/assets/images/skills/version_controll.png"/>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default Skills