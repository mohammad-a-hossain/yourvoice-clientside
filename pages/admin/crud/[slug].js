import Layout from '../../../components/Layout';
import Admin from './../../../components/authPage/Admin';
import  Link from 'next/link';
import BlogUpdate from '../../../components/crud/BlogUpdate'




const Blog= ()=>
{
    return (
       <Layout>
       <Admin>
       <div className="container-fluid">
       <div className="row">
           <div className="col-md-12 pt-5 pb-5">
               <h3>Blog update for Admin</h3>
           </div>
           <div className="col-md-12">
            <BlogUpdate />
           </div>
         
       </div>
   </div>
      
       
        </Admin>
        </Layout>
    )
}

export default Blog