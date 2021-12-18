import Head from 'next/head';
import Link from 'next/link';
import { singleBlog,listRelatedBlogs } from './../../actions/blog';
import React,{ useState,useEffect } from 'react';
import Layout from './../../components/Layout';
import { API } from './../../config';
import moment from 'moment';
import renderHTML from 'react-render-html';
import RealtedBlogCard from './../../components/blog/RelatedBlogCard';
import DisqusThread from '../../components/DisqusThread'

const SingleBlog =({blog,query})=>{

const [related,setRelated] = useState([])

const showRelatedBlog =()=>{
    listRelatedBlogs({blog}).then(data =>{
        if(data.error){
            console.log(data.error)
        }else{
            setRelated(data)
        }
    })
}

useEffect (()=>{
    showRelatedBlog()
},[])

    const ShowCategories =blog=>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

const ShowTags =blog =>
        blog.tags.map((ta,i)=>(
            <Link key={i} href={`/tags/${ta.slug}`}>
            <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{ta.name}</a>
            </Link>
        ))


        
        
    const displayRelatedBlog=()=>{
        return related.map((blog,i)=>(
            <div className="col-md-4" key={i}>
            <article>
                <RealtedBlogCard blog={blog} />
            </article>
             </div>
            ) )
       
    }
    const showComments = () => {
        return (
            <div>
                <DisqusThread id={blog.id} title={blog.title} path={`/blog/${blog.slug}`} />
            </div>
        );
    };
        

    return (
        <React.Fragment>
        <Layout>
        <main>
            <article>
                <div className="container-fluid">
                    <section>
                        <div className="row" style={{ marginTop: '-30px' }}>
                            <img
                                src={`${API}/blog/photo/${blog.slug}`}
                                alt={blog.title}
                                className="img img-fluid featured-image"
                            />
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <h4 className="text-center ">{blog.title}</h4>
                            <p className="lead mt-3 mark">
                            Written by{' '}
                            <Link href={`/profile/${blog.postedBy.username}`}>
                                <a>{blog.postedBy.username}</a>
                            </Link>{' '}| Published {moment(blog.updatedAt).fromNow()}
                            </p>

                            <div className="pb-3">
                                {ShowCategories(blog)}
                                {ShowTags(blog)}
                                <br />
                                <br />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="container">
                    <section>
                        <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
                    </section>
                </div>

                <div className="container">
                    <h4 className="text-center pt-5 pb-5 h2">Related blogs</h4>
                    <div className="row">{displayRelatedBlog()}</div>
                </div>

                <div className="container pb-5">
                    <p>show comments</p>
                </div>
                <div className="container pt-5 pb-5">{showComments()}</div>
            </article>
        </main>
    </Layout>
    </React.Fragment>
 
    )
}

SingleBlog.getInitialProps=({query})=>{
    return singleBlog(query.slug).then(data =>{
        if(data.error){
            console.log(data.error)
        }else{
            return { blog: data,query }
        }
    })

}

export default SingleBlog
/* 
{JSON.stringify(blog)} */
   //  <React.Fragment>
    // <Layout>
    // <main>

    // <article>
    // <div>
    //     <section className='container-fluid'>
    //     <div className='row' style={{marginTop:'-10px'}}>
    //         <img src={`${API}/blog/photo/${blog.slug}`}
    //          alt={blog.title}
    //          className='img img-fluid'
           
    //          />
    //     </div>
           
    //     </section>
    //     <div className='container'>
    //        <section>
    //     <h3 className='text-center'>{blog.title}</h3>
    //     <p className="mark ml-1 pt-2 pb-2">
    //     Written by {blog.postedBy.name} | Published {moment(blog.updatedAt).fromNow()}
            
    //     </p>
    //     </section> 
    //       <section>
    //     <p>
    //     {ShowCategories(blog)}
    //     {ShowTags(blog)}
    //     </p>
    //     </section>
    //     </div>
       
       
    // </div>
    // <div className='container'>
    // <section>
    //     <div className='col-md-12 lead' >
    //         {renderHTML(blog.body)}
    //     </div>
    // </section>
        
    // </div>
    // <div className='container'>
    // <h3 className='text-center'>related  blogs</h3>
    // <div className="row">{displayRelatedBlog()}</div>
   
    
    // <p>show related blogs</p>
    // </div>
    // <div className='container'>
    // <p>show commtnts</p>
    // <br/>
    
        
    // </div>
    // </article>
    // </main>
    // </Layout>
    
    
    // </React.Fragment>