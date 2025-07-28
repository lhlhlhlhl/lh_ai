import SearchBox from '@/components/SearchBox'
 import  useSearchStore  from '@/store/useSearchStore'
 import styles from './search.module.css'
 import { useState,useEffect,memo } from 'react'

const Search = () => {
  const[query,setQuery] = useState('')
   const {
    searchHistory,
    suggestList,
    setSuggestList,
    hotList,
    setHotList
  } = useSearchStore()
  //单向数据流
const HotListItems =memo((props)=>{
  console.log('--------------',props)
  const{hotList} = props
 return(
  <div className={styles.hot}>
    <h1>热门推荐</h1>
    {
      hotList.map(item=>(
        <div className={styles.item} key={item.id}>{item.city}</div>
      ))
    }
  </div>
 )
})
useEffect(()=>{
  setHotList()
},[])
  //反复重新生成，使用useCallback
  const handleQuery = (query) =>{
    //api请求交流
    console.log('debounce后',query)
    setQuery(query);
    if(!query){
        return
    }
    
    setSuggestList(query)
  }
  const suggestListStyle = {
    display: query=='' ?'none' : 'block',
  }
 
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <SearchBox handleQuery={handleQuery}/>
      {/* 维护性，性能 */}
      <HotListItems hotList={hotList}/>
      <div className={styles.list} style={suggestListStyle}>
        {
          suggestList.map(item => 
            (
              <div key={item} className={styles.item}>
                {item}
              </div>
            )
          )
        }
      </div>
      </div>
    </div>
  )
}
export default Search
