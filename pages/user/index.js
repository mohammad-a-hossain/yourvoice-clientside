import Link from 'next/link';
import Layout from '../../components/Layout';
import Private from './../../components/authPage/Private';



const UserIndex = ()=>
{
    return (
       <Layout>
       <Private>
         <div className='container-fluid'>
         <div className="row">
           <div className="col-md-12 pt-5 pb-5">
               <h2>user Dashboard</h2>
           </div>
           <div className="col-md-4">
               <ul class="list-group">
              
               <li className="list-group-item">
              
                   <a href="/user/crud/Blog">Create Blog </a>
              
           </li>
      
        <li className="list-group-item">
        <Link href="/user/crud/Blogs">
        <a>Update/Delete Blog</a>
    </Link>
    </li>

           <li className="list-group-item">
          
               <a  href="/user/update">update profile </a>
          
       </li>
               </ul>
           </div>
           <div className="col-md-8">
           Ex occaecat ea ad adipisicing. Ex cillum irure laborum velit minim sit exercitation excepteur consequat pariatur culpa aliquip. Sint excepteur in cillum est laborum minim aliquip quis ex ea pariatur excepteur dolore. Voluptate ea labore consequat ullamco tempor reprehenderit fugiat magna. Do anim anim esse consectetur ullamco ut aliquip occaecat. Duis esse duis consequat consectetur occaecat sit nisi laboris ullamco nulla. Proident pariatur dolore et ad nostrud exercitation ut.
           </div>
       </div>
             
         </div>
        <h1> user dash board page</h1>
       
        </Private>
        </Layout>
    )
}


export default UserIndex

 //  