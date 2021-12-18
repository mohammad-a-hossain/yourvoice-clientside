
import Layout from '../../../components/Layout';
import Private from '../../../components/authPage/Private';
import Link from 'next/link';
import ManageReadBlog from '../../../components/crud/ManageBlogRead';
import {isAuth} from '../../../actions/auth'


const Blogs = () => {
    const username = isAuth() && isAuth().username 
    // console.log(username,'from localstroage')
    return (
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage blogs</h2>
                        </div>
                        <div className="col-md-12">
                            <ManageReadBlog username ={username}/>
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default Blogs;