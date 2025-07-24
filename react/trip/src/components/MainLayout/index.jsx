import{
    useState,
} from 'react'
import{
    Tabbar,

} from 'react-vant'
import{
    HomeO,
    Search,
    FriendsO,
    SettingO,
    UserO,
} from '@react-vant/icons'
import {
    Outlet,
    useNavigate,
    useLocation,
    
} from 'react-router-dom'
import { useEffect } from 'react'
//菜单栏配置项，更好维护
const tabs = [
    {
        title:'首页',
        icon:<HomeO/>,
        path:'/home',
    },
    {
        title:'特惠专区',
        icon:<Search/>,
        path:'/discount',
    },
    {
        title:'我的收藏',
        icon:<FriendsO/>,
        path:'/collection',
    },
    {
        title:'我的行程',
        icon:<SettingO/>,
        path:'/trip',
    },
    {
        title:'我的账户',
        icon:<UserO/>,
        path:'/account',
    }
]
const MainLayout = () => {
    const [active,setActive] = useState(0)
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        console.log(location.pathname)
        //es6的使用power
        const index = tabs.findIndex(tab => location.pathname.startsWith(tab.path))
        setActive(index)
    },[])
  return (
    <div>
      <Outlet />
      {/* <Tabbar /> */}
      <Tabbar value={active} onChange={
        (key)=>{setActive(key)
            navigate(tabs[key].path)
        }
        
      } >
        {
            tabs.map((tab,index)=>(
                    <Tabbar.Item 
                        key={index}  
                        icon={tab.icon} 
                    >
                        {tab.title}
                    </Tabbar.Item>
            
                ))
        }
      </Tabbar>
    </div>
  )
}
export default MainLayout
