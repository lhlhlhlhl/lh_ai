import { Component } from 'react'
import Child from './Child.jsx'

class LifecycleDemo extends Component {
    constructor(props){
        console.log('constructor')
        super(props);//调用父类的构造函数
        this.state = {
            count:0
        }
    }
    doIncrement=()=>{
        console.log('////',this)

        this.setState({
            count:this.state.count+1
        })
    }

    componentDidMount(){
        console.log('组件挂载了')
    }
    componentDidUpdate(){
        console.log('组件更新了')
    }
    componentWillUnmount(){
        console.log('组件卸载了')
    }


    //状态，生命周期
    //JSX
   render()  {
    return (
        <>
            <h1>Lifecycle Demo</h1>
            <p>Count:{this.state.count}</p>
            <button onClick={this.doIncrement.bind(this)}>Increment</button>
            {/* doIncrement.bind(this)会返回一个新的函数，这个函数的this指向当前组件 */}

            <Child title={'hello'}/>
        </>
    )
   }
}

export default LifecycleDemo
