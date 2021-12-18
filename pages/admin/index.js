

import Layout from '../../components/Layout'
import Private from '../../components/authPage/Private';
import Admin   from '../../components/authPage/Admin';
import  Link from 'next/link';



const AdminIndex = ()=>
{
    return (
       <Layout>
       <Admin>
       <div className="container-fluid">
       <div className="row">
           <div className="col-md-12 pt-5 pb-5">
               <h2>Admin Dashboard</h2>
           </div>
           <div className="col-md-4">
               <ul class="list-group">
                   <li className="list-group-item">
                       
                           <a href="/admin/crud/category-tag">Create Category</a>
                      
                   </li>
                   <li className="list-group-item">
                  
                       <a href="/admin/crud/category-tag">Create Tags </a>
                  
               </li>
               <li className="list-group-item">
              
                   <a href="/admin/crud/blog">Create Blog </a>
              
           </li>
           <li className="list-group-item">
          
               <a  href="/admin/crud/BlogManage">Manage Blog </a>
          
       </li>
               </ul>
           </div>
           <div className="col-md-8">
          <h2>authenticate admin -user dash board</h2>
           </div>
       </div>
   </div>
      
       
        </Admin>
        </Layout>
    )
}

export default AdminIndex