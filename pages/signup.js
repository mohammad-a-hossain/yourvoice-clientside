
import Layout from '../components/Layout';
import SignupComp from './../components/authPage/signupComp';


const Signup = ()=>
{
    return (
       <Layout>
        <h1 className='text-center '>signup page</h1>
        <div className='row'>
        <div className='col-md-6 offset-md-2'>
              <SignupComp/>
        </div>
            
        </div>
      
        </Layout>
    )
}

export default Signup