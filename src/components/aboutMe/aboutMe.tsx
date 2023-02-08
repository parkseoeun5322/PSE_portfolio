import userData from "../../db/user.json"

const AboutMe = () => {
    return (
        <article className="aboutMe" id="about-me">
            <div className="aboutMe__content">
                <div className="sectionTitle">
                    <div className="sectionTitle__icon">
                        <i className="fa-solid fa-paperclip"></i>
                    </div>
                    <div className="sectionTitle__text bg">ABOUT ME</div>
                </div>
                {userData.map((data) => (
                    <div className="aboutMe__basic-infos" key={data.id}>
                        <div className="aboutMe__basic-info-wrapper">
                            <div className="aboutMe__basic-info">
                                <div className="aboutMe__basic-info-icon">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="aboutMe__basic-info-field">
                                    <div className="aboutMe__basic-info-label">이름</div>
                                    <div className="aboutMe__basic-info-value">{data.name}</div>
                                </div>
                            </div>
                        </div>
                        <div className="aboutMe__basic-info-wrapper">
                            <div className="aboutMe__basic-info">
                                <div className="aboutMe__basic-info-icon">
                                    <i className="fa-regular fa-calendar-days"></i>
                                </div>
                                <div className="aboutMe__basic-info-field">
                                    <div className="aboutMe__basic-info-label">생년월일</div>
                                    <div className="aboutMe__basic-info-value">{data.birth}</div>
                                </div>
                            </div>
                        </div>
                        <div className="aboutMe__basic-info-wrapper">
                            <div className="aboutMe__basic-info">
                                <div className="aboutMe__basic-info-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="aboutMe__basic-info-field">
                                    <div className="aboutMe__basic-info-label">주소지</div>
                                    <div className="aboutMe__basic-info-value">{data.address}</div>
                                </div>
                            </div>
                        </div>
                        <div className="aboutMe__basic-info-wrapper">
                            <div className="aboutMe__basic-info">
                                <div className="aboutMe__basic-info-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="aboutMe__basic-info-field">
                                    <div className="aboutMe__basic-info-label">연락처</div>
                                    <div className="aboutMe__basic-info-value">{data.mobile}</div>
                                </div>
                            </div>
                        </div>
                        <div className="aboutMe__basic-info-wrapper">
                            <div className="aboutMe__basic-info">
                                <div className="aboutMe__basic-info-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="aboutMe__basic-info-field">
                                    <div className="aboutMe__basic-info-label">이메일</div>
                                    <div className="aboutMe__basic-info-value">{data.email}</div>
                                </div>
                            </div>
                        </div>
                        <div className="aboutMe__basic-info-wrapper">
                            <div className="aboutMe__basic-info">
                                <div className="aboutMe__basic-info-icon">
                                    <i className="fa-solid fa-pen-nib"></i>
                                </div>
                                <div className="aboutMe__basic-info-field">
                                    <div className="aboutMe__basic-info-label">학력</div>
                                    <div className="aboutMe__basic-info-value">{data.education}<br/>({data.education_detail})</div>
                                </div>
                            </div>
                        </div>  
                    </div>
                ))}
            </div>
        </article>
    )
} 

export default AboutMe