import {
    useState,
} from 'react'
//css in js,css里面的代码在js中作为一个类使用
import styles from './box.module.css'
const Box =()=>{
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button onClick={()=>setOpen(!open)}>
                {open?'Close':'Open'}
            </button>
            <div className={`${styles.box} ${open?styles.open:''}`}></div>
            {/* 注意：模板字符串不能连在一起 */}
        </div>
    )
}
export default Box