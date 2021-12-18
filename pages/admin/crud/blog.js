import Layout from '../../../components/Layout';
import Admin from './../../../components/authPage/Admin';
import  Link from 'next/link';
import CreateBlog from '../../../components/crud/CreateBlog'




const Blog= ()=>
{
    return (
       <Layout>
       <Admin>
       <div className="container-fluid">
       <div className="row">
           <div className="col-md-12 pt-5 pb-5">
               <h3>Manage Blog page</h3>
           </div>
           <div className="col-md-12">
             <CreateBlog/>
           </div>
         
       </div>
   </div>
      
       
        </Admin>
        </Layout>
    )
}

export default Blog