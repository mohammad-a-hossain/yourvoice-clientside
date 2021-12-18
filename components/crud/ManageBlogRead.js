import Link from 'next/link';
import React,{ useState, useEffect } from 'react';
import Router from 'next/router';
import {getCookie, isAuth } from '../../actions/auth';
import { blogsListForAdmin,removeBlogManage  } from '../../actions/blog';
import moment from 'moment';


const ManageReadBlog =({username})=>{console.log(username)
    const [blogs, setBlogs] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');

        useEffect(() => {
        loadBlogList();
        }, []);  
       // console.log(blogs)

    const loadBlogList =()=>{
        blogsListForAdmin(username).then(data =>{
            if(data.error){
                console.log(data.error)

            }else{
               // setBlogs(data.blogs)
               setBlogs(data)
                
            }
        })
    }
     const deleteBlog = slug=>{
        removeBlogManage(slug,token).then(data =>{
            if(data.error){
                console.log(data.error)
            }else{
                setMessage(data.mmessage)
                loadBlogList()
            }
        })
     }
     const deleteConfirm =slug=>{
        let answer = window.confirm('Are you sure you want to delete your blog?');
        if (answer) {
            deleteBlog(slug);
        }
     }


    const showListBlogManage =() =>{
          //console.log(blogs)  
        return blogs && blogs.map((blog, i) => {
            return (
               
                <li key={i}> 
                {blog.title}
                <p className="mark">
                    Written by {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()}
                </p>
                <button className="btn btn-sm btn-danger" onClick={() => deleteConfirm(blog.slug)}>
                    Delete
                </button>
                    {showUpdateButton(blog)}
                </li>
            )
        })
    }

    const showUpdateButton = blog=>{
             if(isAuth() && isAuth().role === 0){
                 return(
                     <Link href={`/user/crud/${blog.slug}`}>
                     <a> update</a>
                     </Link>
                 )
             }else if(isAuth() && isAuth().role === 1){
                return(
                    <Link href={`/admin/crud/${blog.slug}`}>
                     <a className='ml-2 btn-sm btn-info'>Update</a>
                    </Link>
                )
             }
    }

 return(
     <React.Fragment>
        <div className="row">
            <div className="col-md-12">
                {message && <div className="alert alert-warning">{message}</div>}
                {showListBlogManage()}
            </div>
        </div>
    
     </React.Fragment>
 )
 
}
export default ManageReadBlog