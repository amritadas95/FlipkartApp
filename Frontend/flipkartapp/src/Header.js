import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./Login"
const Header =()=>{
return(
    <div style={{width:"500px"}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </div>
)
}
export default Header