import careerData from "../../db/career.json"

const Career = () => {
    return (
        <article className="career" id="career">
            <div className="career__content">
                <div className="sectionTitle">
                    <div className="sectionTitle__icon">
                        <i className="fa-solid fa-paperclip"></i>
                    </div>
                    <div className="sectionTitle__text bb">CAREER</div>
                </div>
                <div className="career__companies">
                    {careerData.map((data, index) => (
                        <div className="career__company" key={index}>
                            <div className="career__logo-wrapper">
                                <img src={data.logo} />
                            </div>
                            <div className="career__info">
                                <div className="career__title">{data.name}</div>
                                <div className="career__period">{data.period}</div>
                                <div className="career__description" dangerouslySetInnerHTML={{__html: data.description}}></div>
                                <ul className="career__works">
                                    {data.responsibilities.map((data2, index2) => (
                                        <div key={index2}>
                                        <h4 className="career__works-title">▎ {data2.res_period}</h4>
                                        {/*<h5 className="career__works-period">2021 상반기</h5>*/}
                                        {data2.res_detail.map((data3, index3) => (
                                            <li key={index3} dangerouslySetInnerHTML={{__html: data3}}></li>
                                        ))}
                                        </div>
                                    ))}
                                </ul>
                            </div>                                                        
                        </div>
                    ))}
                </div>
              
                    


            </div>
        </article>
    )
}

export default Career