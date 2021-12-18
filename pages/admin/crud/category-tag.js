import Layout from '../../../components/Layout';
import Admin from './../../../components/authPage/Admin';
import  Link from 'next/link';
import Category from './../../../components/crud/Category';
import Tags from './../../../components/crud/Tags';




const CategoryTag = ()=>
{
    return (
       <Layout>
       <Admin>
       <div className="container-fluid">
       <div className="row">
           <div className="col-md-12 pt-5 pb-5">
               <h3>Manage Category and Tags</h3>
           </div>
           <div className="col-md-6">
             <Category />
           </div>
           <div className="col-md-6">
           <Tags/>
           </div>
       </div>
   </div>
      
       
        </Admin>
        </Layout>
    )
}

export default CategoryTag