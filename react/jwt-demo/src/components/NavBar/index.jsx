//导航栏

import{
    Link,
} from 'react-router-dom'
import {
    useUserStore
} from '../../store/user'
const NavBar = () => {
    const{isLogin,user,logout} = useUserStore()
    console.log(isLogin,user,'/////')
    return (
        <nav style={{padding:10,borderBottom:'1px solid #ccc'}}>
            <Link to='/'>Home</Link>&nbsp;&nbsp;
            <Link to='/pay'>Pay</Link>&nbsp;&nbsp;
            {
                isLogin?(
                    <>
                        <span>Welcome,{user.username}</span>&nbsp;&nbsp;
                        <button onClick={logout}>Logout</button>
                    </>

            ):
                <Link to='/login'>Login</Link>

            }
            {/* {!isLogin&&<Link to='/login'>Login</Link>}
            {isLogin&&<button onClick={logout}>Logout</button>} */}
        </nav>
    )
}
export default NavBar;
