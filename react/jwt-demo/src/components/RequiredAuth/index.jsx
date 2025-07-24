// 路由守卫，判断是否登入，登入才能访问，未登入，跳转到登入页面

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
