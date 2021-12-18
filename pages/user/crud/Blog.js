import Layout from '../../../components/Layout';
import  Link from 'next/link';
import CreateBlog from '../../../components/crud/CreateBlog'
import Private from './../../../components/authPage/Private';




const Blog= ()=>
{
    return (
       <Layout>
       <Private>
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
      
       
        </Private>
        </Layout>
    )
}

export default Blog