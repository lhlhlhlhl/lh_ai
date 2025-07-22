import { useCountStore } from "../../store/count"
//来自store
const Counter = () => {
    const{
        count,
        increment,
        decrement,
    } = useCountStore()
    return(
        <>
        counter{count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </>
    )
}
export default Counter