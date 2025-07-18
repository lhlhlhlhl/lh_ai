import{
    useParams,
    useNavigate,
    Link,
} from'react-router-dom'
import{useEffect} from'react'
import{
  useRepos
} from '@/hooks/useRepos'
const RepoList = () =>{
    const {id} = useParams()//返回参数的对象 key:value
    console.log(useParams())
   const navigate = useNavigate()//返回一个函数，用于跳转到指定的页面
   //hooks
   const {repos,loading,error}= useRepos(id);
   console.log(repos,loading,error)

   useEffect(()=>{
    if(!id.trim()){
        navigate('/')//跳转到首页
        return;
       }

   },[])
   
   if(loading) return <h1>Loading</h1>
    if(error) return (<h1>{error}</h1>)
    repos.map((repo)=>{
            console.log(repo.name);
        })

   return (
    <>
    <h2>Repositories for {id}</h2>
    {
        repos.map((repo)=>(
            <div>
                kkkk
            <Link key={repo.id} to={`/users/${id}/repos/${repo.name}`}>
            {repo.name}
            kakaka
            </Link>
            </div>
        ))
    }
    </>
   )
}
export default RepoList