import React,{useEffect, useState } from 'react';
import Link from 'next/link'
import { signin, authenticate, isAuth} from './../../actions/auth';
import Router from 'next/router'

const SignInComp =()=>{


    const [values,setValues] = useState({
      
        email:'',
        password:'',
        error:'',
        loading:false,
        message:'',
        showForm:true
    })
    const {email,password,error,loading,message,showForm}=values

    // setting redirect if logged in user
    useEffect(() => {
       isAuth() && Router.push('/')
    }, [])

    const handleSubmit= e =>{
        e.preventDefault()
        
        //   console.table({name,email,password,error,loading,message,showForm})
        setValues({...values, loading:true,error:false})
        const user ={email,password}

         signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                // save user to cookie
                 // authenticate user
                authenticate(data,()=>{
              if(isAuth() && isAuth().role === 1){
                Router.push('/admin')
              }else{
                Router.push('/user')
              }
                
                })
                // save user info to localstorage
          
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

    const signInForm =()=>{
    
        return ( 
            <form onSubmit={handleSubmit}>
              
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
                <button className='btn btn-success' type='submit'>Login</button>
            </form>
        );
    };



    return (
        <React.Fragment>
        {showError()}
        {showLoading()}
        {showMessage()}
        {showForm && signInForm()}
        <br/>
        <Link href="/auth/password/forgetPass">
        <a className="btn btn-outline-danger btn-sm">forget- Password</a>
        </Link>
        </React.Fragment>
    );
        
}



export default SignInComp
/* {showError()}
{showLoading()}
{showMessage()}
{showForm && signupForm()} */