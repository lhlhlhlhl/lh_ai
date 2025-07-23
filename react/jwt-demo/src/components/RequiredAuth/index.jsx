import {
    useUserStore
} from '../../store/user'
import{
    useNavigate,
    useLocation
} from 'react-router-dom'
import{
    useEffect
} from 'react'
const RequiredAuth = ({children}) => {
    const{isLogin} = useUserStore()
    const navigate = useNavigate()
    const {pathname}= useLocation()
    useEffect(()=>{
        if(!isLogin){
            navigate('/login',{from:pathname})
        }
    },[])
    
    return (
        <>
            {children}
        </>
    )
}
export default RequiredAuth;
