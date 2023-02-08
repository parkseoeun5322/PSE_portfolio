const Archiving = () => {
    return (
        <article className="archiving" id="archiving">
            <div className="archiving__content">
                <div className="sectionTitle">
                    <div className="sectionTitle__icon">
                        <i className="fa-solid fa-paperclip w"></i>
                    </div>
                    <div className="sectionTitle__text wg">ARCHIVING</div>
                </div>
                <div className="archiving__container">
                    <a className="archiving__wrapper sink-effect" href="https://github.com/parkseoeun5322" target="_blank">
                        <div className="archiving__img-wrapper">
                            <img className="archiving__img" src={import.meta.env.VITE_IMAGE_URL + 'archiving/logo_github.png?raw=true'}/>
                        </div>
                        <div className="archiving__url">https://github.com/parkseoeun5322</div>
                        <div className="archiving__description">
                            <p><b>소스 코드 저장소</b>입니다.</p>
                            <ul>
                                <li>과거 진행했던 프로젝트 소스 코드</li>
                                <li>혼자서 코딩 연습을 위해 끄적이던 소스 코드</li>
                                <li>국비 교육 수업 자료 및 코딩 과제 소스 코드</li>
                            </ul>
                        </div>
                    </a>
                    <a className="archiving__wrapper sink-effect" href="https://mystudyblog-it.tistory.com" target="_blank">
                        <div className="archiving__img-wrapper">
                            <img className="archiving__img" src={import.meta.env.VITE_IMAGE_URL + 'archiving/logo_tistory.png?raw=true'}/>
                        </div>
                        <div className="archiving__url">https://mystudyblog-it.tistory.com</div>
                        <div className="archiving__description">
                            <p><b>공부 및 기록 목적의 블로그</b>입니다.</p>
                            <ul>
                                <li>공부한 것을 진정한 나의 것으로 만들기 위한 기록</li>
                                <li>국비 교육 수업들의 내용 복습 겸 정리</li>
                                <li>프로젝트 진행 시 마주했던 오류 해결 과정에 대한 기록</li>
                            </ul>
                        </div>
                    </a>                    
                </div>
            </div>
        </article>
    )
}

export default Archiving