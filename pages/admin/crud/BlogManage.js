import Admin from './../../../components/authPage/Admin';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import ManageReadBlog from './../../../components/crud/ManageBlogRead';


const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage blogs</h2>
                        </div>
                        <div className="col-md-12">
                            <ManageReadBlog/>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Blog;