import { useEffect } from 'react'
import {
    useRepoStore
} from '../../store/repos.js'

const RepoList = () => {
    const {repos,loading,error,fetchRepos} = useRepoStore()

    useEffect(() => {
        fetchRepos()
    }, [])
    if(loading){
        return <div>{loading}</div>
    }
    if(error){
        return <div>{error}</div>
    }
    return(
        <div>
            <h2>UseRepos</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target='_blank' rel='noreferrer'>{repo.name}</a>
                        <p>{repo.description || 'No description'}</p>
                    </li>
                ))}
            </ul>
        </div>
    )


}
export default RepoList