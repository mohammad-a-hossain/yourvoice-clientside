import  fetch  from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string'
import {isAuth,handleResponse} from './auth'


export const createBlogg =(blog,token)=>{
    let createBlogEndPoint 

    if(isAuth() && isAuth().role === 1){
        createBlogEndPoint =`${API}/blog`
    }else if(isAuth() && isAuth().role === 0){
        createBlogEndPoint= `${API}/user/blog`
    }
      return fetch(`${createBlogEndPoint}`,{
          method:'POST',
          headers:{
              Accept:'application/json',
              Authorization:`Bearer ${token}`
          },
          body:blog 
      })
      .then(response =>{
        handleResponse(response) // this will act an middleware for token expire or not
          return response.json()
      })
      .catch(err => console.log(err))
}



export const listBlogWithCatAndTag =( skip,limit)=>{
    const data ={skip,limit}
    return fetch(`${API}/blogCatTag`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        }, 
        body:JSON.stringify(data)
    })
    .then(response =>{//console.log(response)
        return response.json()
    })
    .catch(err => console.log(err))
}

export const singleBlog =(slug)=>{
      return fetch(`${API}/blog/${slug}`,{
          method:'GET'
      })
      .then(response =>{
          return response.json()
      })
      .catch(err => console.log(err))
}

export const listRelatedBlogs =blog=>{

    return fetch(`${API}/blog/relatedBlog`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
            }, 
            body:JSON.stringify(blog)
        })
        .then(response =>{
            return response.json()
        })
        .catch(err => console.log(err))
    }


export const blogsListForAdmin= username =>{
    let listBlogsEndpoint

    if (username) {
        listBlogsEndpoint = `${API}/${username}/Blogs`;
    } else {
        listBlogsEndpoint = `${API}/Blogs`;
    }
    return fetch(`${listBlogsEndpoint}`, {
            method:'GET'
        })
        .then(response =>{
            return response.json()
        })
        .catch(err => console.log(err))
  }

export const removeBlogManage =(slug,token)=>{
    let deleteBlogEndPoint 

    if(isAuth() && isAuth().role === 1){
        deleteBlogEndPoint =`${API}/blog/${slug}`
    }else if(isAuth() && isAuth().role === 0){
        deleteBlogEndPoint= `${API}/user/blog/${slug}`
    }
    return fetch(`${deleteBlogEndPoint}`,{
        method:'DELETE',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
            Authorization:`Bearer ${token}`
        }
      
    })
    .then(response =>{
        handleResponse(response) 
        return response.json()
    })
    .catch(err => console.log(err))
}

export const updateBlogManage =(blog,token,slug)=>{
    let updateBlogEndpoint;

    if (isAuth() && isAuth().role === 1) {
        updateBlogEndpoint = `${API}/blog/${slug}`;
    } else if (isAuth() && isAuth().role === 0) {
        updateBlogEndpoint = `${API}/user/blog/${slug}`;
    }


    return fetch(`${updateBlogEndpoint}`,{
        method:'PUT',
        headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`
        },
        body:blog 
    })
    .then(response =>{
        handleResponse(response) 
        return response.json()
    })
    .catch(err => console.log(err))
}

export const searchBlogList =params =>{
   // console.log('search params',params)
    let query =queryString.stringify(params) 
   // console.log('query params',query)
    return fetch(`${API}/blogs/search?${query}`,{
        method:'GET'
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}


