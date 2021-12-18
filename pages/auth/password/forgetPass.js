import { useState } from 'react';
import Layout from '../../../components/Layout'
import { forgetPassword  } from '../../../actions/auth';


const ForgetPassword =()=>{
    const [values,setValues] = useState({
        email:'',
        message:'',
        error:'',
        showForm:true
    })
    const {email, message,error,showForm} = values

    const handleChange = name => e=>{
           setValues({...values, message:'', error:'', [name]:e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault()
        setValues({ ...values, message: '', error: '' })
     
        forgetPassword({ email }).then(data => {
            if (data.error) {console.log(data.error)
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, message: data.message, email: '', showForm: false })
            }
        })
    }

    const showError = () => (
        error ? <div className="alert alert-danger">{error}</div> : ''
        )

    const showMessage = () => (
        message ? <div className="alert alert-success">{message}</div> : ''
        )


    const forgetPasswordForm =()=>(
        <form onSubmit ={handleSubmit}>
            <div className="form-group pt-5">
                <input
                    type="email"
                    onChange={handleChange('email')}
                    className="form-control"
                    value={email}
                    placeholder="Type your email"
                    required
                />
            </div>
            <div>
                <button className="btn btn-primary">Send password reset link</button>
            </div>
        </form>
    )

    return (
        <Layout>
         <div className='container'>
         <h2>Forgot password</h2>
         <hr />
         {showError()}
         {showMessage()}
         {showForm && forgetPasswordForm()}
         </div>
        
        </Layout>
    )
}
export default ForgetPassword