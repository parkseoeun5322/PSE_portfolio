import { useRoutes } from "react-router-dom"
import { routes } from "./routes"
import Gnb from './components/gnb'

const App = () => {
    const elem = useRoutes(routes)
    return <>
        <Gnb/>
        {elem}   
    </>
}

export default App