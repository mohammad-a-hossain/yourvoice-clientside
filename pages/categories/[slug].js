
import Link from 'next/link';
import React from 'react'
import { singleCategory} from '../../actions/category';
import Layout from '../../components/Layout';
import BlogCard from '../../components/blog/BlogCard';

const Category =({category,blogs})=>{

    return (
        <React.Fragment>
        <Layout>
        <main>
         <div className='container-fluid  text-center'>
         <header>
             <div className='col-md-12 pt-3'>
             <h3>{category.name}</h3>
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

Category.getInitialProps=({query})=>{
    return singleCategory(query.slug).then(data =>{
        if(data.error){
            console.log(data.error)
        }else{
            return { category:data.category, blogs:data.blogs}
        }
    })

}

export default Category
