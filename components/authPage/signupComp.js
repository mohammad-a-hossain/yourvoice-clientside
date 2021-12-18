import React,{useEffect, useState } from 'react';
import { preSignin,signup, authenticate, isAuth} from './../../actions/auth';
import Router from 'next/router'
import GoogleLogin from './GoogleLogin';



const SignupComp =()=>{


    const [values,setValues] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        loading:false,
        message:'',
        showForm:true
    })
    const {name,email,password,error,loading,message,showForm}=values

    
    // setting redirect if logged in user
    useEffect(() => {
        isAuth() && Router.push('/')
     }, [])
 

    const handleSubmit= e =>{
        e.preventDefault()
        
        //   console.table({name,email,password,error,loading,message,showForm})
        setValues({...values, loading:true,error:false})
        const user ={name,email,password}

        preSignin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
            }
        })

    }
    const handleChange= name => e =>{
        setValues({...values, error:false,[name]:e.target.value})
    }

    const showLoading = ()=>(loading ? <div className='alert alert-info'>
        loading....
    </div>:'')

    const showError= ()=>(error ? <div className='alert alert-danger'>
    {error}
</div>:'')

const showMessage= ()=>(message ? <div className='alert alert-success '>
{message}
</div>:''
)

    const signupForm =()=>{
    
        return ( 
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input 
                    onChange={handleChange('name')} 
                    type="text" 
                    className='form-control' 
                    value={name}
                    placeholder='name of user'/>
                </div>
                <div className='form-group'>
                    <input 
                    onChange={handleChange('email')} 
                    type="email" 
                    className='form-control' 
                    value={email} 
                    placeholder='email of user'/>
                 </div>
                <div className='form-group'>
                    <input 
                    onChange={handleChange('password')} 
                    type="password" 
                    className='form-control' 
                    value={password}
                    placeholder='password of user'/>
                </div>
                <button className='btn btn-success' type='submit'>submit</button>
            </form>
        );
    };



    return (
        <React.Fragment>
        {showError()}
        {showLoading()}
        {showMessage()}
         <GoogleLogin/>
        {showForm && signupForm()}
       
        </React.Fragment>
    );
        
}



export default SignupComp
