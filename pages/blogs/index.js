import Head from 'next/head';
 import Link from 'next/link';
 import { withRouter } from 'next/router';
 import React,{ useState } from 'react';
import Layout from './../../components/Layout';
import{ listBlogWithCatAndTag} from '../../actions/blog'
import BlogCard from './../../components/blog/BlogCard';
import { API } from './../../config';


const Blogs =({blogs,categories,tags,totalblogs,blogLimit,blogSkip})=>{

    
    const [limit, setLimit] = useState(blogLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalblogs);
    const [loadedBlogs, setLoadedBlogs] = useState([]);

    const loadMoreBlog= () => {
        let toSkip = skip + limit;
        listBlogWithCatAndTag(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };
    



    const loadMoreButton =()=>{
        return (
            size > 0 && size >= limit &&(
                <button onClick={loadMoreBlog} className="btn btn-outline-primary btn-lg">Load More..</button>
            )
        )
    }
    
    const ShowAllBlogs =()=>{
        return blogs.map((blog,i)=>{
            return(
                <article key={i}>
                <BlogCard blog={blog}/>
                <hr />
                </article>
             ) 
        })
    }

   
const showAllCategories = () => {
           // console.log(categories)
        return categories && categories.map((c, i) => (
            <Link href={`/categories/${c.slug}`} key={i}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));
    }; 
 
const showAllTags =()=> {
        return tags && tags.map((t, i) => (
            <Link href={`/tags/${t.slug}`} key={i}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));
    }; 
      

    const showLoadedBlogs =()=>{
        return loadedBlogs.map((blog,i)=>{
           
                <article key={i}>
                <BlogCard blog={blog} />
                </article>
              
        })
    }
    
    return (
        <React.Fragment>
           
            <Layout>
                <main>
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 pt-3">
                                <h1 className="text-center">
                                   ALL BLOG PAGE RENDERING HERE
                                </h1>
                            </div>
                            <section>
                                <div className="pb-5 text-center">
                                    {showAllCategories()}
                                    <br />
                                    {showAllTags()}
                                </div>
                            </section>
                        </header>
                    </div>
                    <div className="container-fluid">{ShowAllBlogs()}</div>
                    <div className="container-fluid">{showLoadedBlogs()}</div>
                    <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
                </main>
            </Layout>
        </React.Fragment>
    )
}
Blogs.getInitialProps=()=>{
    let skip =0
    let limit=3
    return listBlogWithCatAndTag(skip,limit).then(data =>{
       // console.log(data)
        if(data.error){
            console.log(data.error)
        }else{
            return{
                blogs:data.blogs,
                categories:data.categories,
                tags:data.tags,
                totalblogs:data.size,
                blogLimit:limit,
                blogSkip:skip
            }
        }
    })
}

export default withRouter(Blogs)

