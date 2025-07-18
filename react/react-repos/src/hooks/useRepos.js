import{
    useState,
    useEffect,
    useContext,
}from 'react';
import{
    GlobalContext,
}from '@/context/GlobalContext'
import {
    getRepos,
}from '@/api/repos'

export const useRepos = (id) => {
   const {state,dispatch} = useContext(GlobalContext) //返回值为value值
   useEffect(()=>{
    console.log('------');
    dispatch({
        type:'FETCH_START'
    });
    (async()=>{
        try{
            const res = await getRepos(id)
            console.log('///',res)
            dispatch({
                type:'FETCH_SUCCESS',
                payload:res.data
            })
        }catch(err){
            dispatch({
                type:'FETCH_ERROR',
                payload:err.message
            })
        }
    })()
   },[])
    return state
    //为什么dispatch不返回
}