
import Link from 'next/link';
import React from 'react'
import {singleTag} from '../../actions/Tags';
import Layout from '../../components/Layout';
import BlogCard from '../../components/blog/BlogCard';

const Tag =({tag,blogs})=>{

    return (
        <React.Fragment>
        <Layout>
        <main>
         <div className='container-fluid  text-center'>
         <header>
             <div className='col-md-12 pt-3'>
             <h3>{tag.name}</h3>
           
                   {
                    blogs.map((b,i)=>(
                        <BlogCard key={i} blog={b} />
                    ))}
             </div>
         </header>
        
         </div>
            
        </main>
       
    </Layout>
    </React.Fragment>
 
    )
}

Tag.getInitialProps=({query})=>{
    return singleTag(query.slug).then(data =>{
        if(data.error){
            console.log(data.error)
        }else{
            return { tag:data.tag,blogs:data.blogs}
        }
    })

}

export default Tag
