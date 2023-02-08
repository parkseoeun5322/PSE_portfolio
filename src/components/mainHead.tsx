import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import userData from "../db/user.json"

const MainHead = ({
    expanded,
    headerHeight,
    setExpanded,
} : {
    expanded: boolean
    headerHeight: number
    setExpanded : (expanded:boolean) => void
}) => {
    // const [headerHeight, setHeaderHeight] = useState(0)

    // const handlePage = () => {
    //     setTimeout(()=>{ 
    //         const heightElement = document.querySelector('.gnb')
    //         const value = heightElement?.clientHeight as number
    //         setHeaderHeight(value)
    //     }, 450)
    // }

    // useEffect(()=>{
    //     handlePage()
    // },[])
    
    return (
        <div className="mainHead">
            <div className="mainHead__content">
                <div className="mainHead__title">
                    - 박서은 - <br/> 웹 개발자 포트폴리오
                </div>
                <hr className="mainHead__divider"/>
                {userData.map((data, index) => (
                    <div 
                        className="mainHead__description" 
                        key={index} 
                        dangerouslySetInnerHTML={{__html: data.introduction}}
                    ></div>
                ))}
                <div className="mainHead__find-out-more"><Link onClick={() => setExpanded(false)} to="about-me" offset={-headerHeight}>더 알아보기 ↓</Link></div>
            </div>
        </div>
    )
}

export default MainHead