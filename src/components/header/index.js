import Navbar from './navbar'
import { useLocation } from 'react-router-dom';
const Header = ()=>{
    console.log(useLocation().pathname.slice(1))
    
    return (
        <div>
            <Navbar />
        </div>
    )
}

export default Header;