
import Layout from '../components/Layout';
import SignInComp from './../components/authPage/signinComp';
import { withRouter } from 'next/router';



const Signin = ({router})=>
{

    const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>;
        } else {
            return;
        }
    };


    return (
       <Layout>
       <h1 className='text-center '>login/signin page</h1>
        <div className="row">
                    <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
                </div>

        <div className='row'>
        <div className='col-md-6 offset-md-2'>
              <SignInComp/>
        </div>
            
        </div>
        </Layout>
    )
}

export default withRouter(Signin)