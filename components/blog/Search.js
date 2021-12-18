import Link from 'next/link'
import {searchBlogList } from '../../actions/blog' 
import  { useState } from 'react'
import renderHTML from 'react-render-html';


const Search =()=>{
    const [values, setValues] =useState({
        search:undefined,
        results:[],
        searched: false,
         message:'',
    })
    const { search, results, searched, message } = values;

    const handleChange = e =>{
            //console.log(e.target.value)
            setValues({ ...values, search: e.target.value, searched: false, results: [] });
        }
    const searchBlog =e=>{
        e.preventDefault()
        //console.log('i got it')
        searchBlogList({search}).then(data =>{
            setValues({...values, results: data,message:`${data.length} blogs found`})
        })

    }
    
    const searchedBlogs = (results = []) => {
        return ( 
            <div className="jumbotron bg-white">
               
            {message && <p className="pt-4 text-muted font-italic">{message}</p>}
                {results.map((blog, i) => {
                    return (
                        <div key={i}>
                            <Link href={`/blogs/${blog.slug}`}>
                                <a className="text-primary">{blog.title}</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    };
    const showSearchForm = ()=>(
        <form onSubmit={searchBlog}>
            <div className="row">
            <div className="col-md-8">
            <input
            onChange={handleChange}
             type="search" className="form-control" placeholder="Search blogs" />
            </div>

            <div className="col-md-4">
                <button className="btn btn-block btn-outline-primary" type="submit"> Search</button>
            </div>
            </div>  
     </form>
    )

    
    return(
        <div className="container-fluid">
        <div className="pt-3 pb-5">{showSearchForm()}</div>
        <div style={{ marginTop: '-120px', marginBottom: '-80px' }}>{searchedBlogs(results)}</div>
        
    </div>
    )
}
export default Search 