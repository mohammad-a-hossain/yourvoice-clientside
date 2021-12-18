import Link from 'next/link'
import React,{useState, useEffect } from 'react';
import Router from 'next/router' 
import { getCookie,isAuth,profileUpdateAuth } from '../../actions/auth';
import {getUserProfile,update } from '../../actions/user'
import { API } from '../../config';

const ProfileUpdate =()=>{
    
   // console.log(token)
    const [values, setValues] =useState({
        username: '',
        username_for_photo: '',
        name: '',
        email: '',
        about:'',
        password: '',
        error: false,
        success: false,
        loading: false,
        photo: '',
        userData: process.browser && new FormData()

    })

    
    const { username,username_for_photo, name, email, password, about,error, success, loading, photo, userData } = values;

    const token = getCookie('token')


    const initialUser=()=>{
        getUserProfile(token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
                console.log(data.error)
            } else {
                profileUpdateAuth(data,()=>{
                    setValues({
                    ...values,
                    username: data.username,
                    username_for_photo:data.username,
                    name: data.name,
                    email: data.email,
                    about: data.about,
                    password:'',
                    success:true,
                    loading:false
                });
            })
                
            }
        });
    }

    useEffect(()=>{
        initialUser()
        setValues({ ...values, userData: new FormData() });
    },[])



    const handleChange =name => e =>{
        const value = name ==='photo' ? e.target.files[0] : e.target.value
       // let userFormData = new FormData()
       userData.set(name,value)
        console.log(...userData);
        setValues({...values,[name]:value, userData, error:false,success:false})

    }
     const handleSubmit=e=>{
         e.preventDefault()
         setValues({...values, loading:true })
         update(token,userData).then(data =>{
             if(data.error){
                console.log('data.error', data.error);
                 setValues({...values, error:data.error, success:false, loading:false })
             }else{
                 setValues({
                     ...values,
                     username:data.username,
                     name:data.name,
                     email:data.email,
                     about:data.about,
                     password:'', 
                     success:true, 
                     loading:false
                 })
             }
         })
        
     }

    const userProfileForm =()=>(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label className="btn btn-outline-info">
                Profile photo update
                <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
            </label>
            </div>
            <div className="form-group">
            <label className="text-muted">Username</label>
            <input onChange={handleChange('username')} type="text" value={username} className="form-control" />
            </div>
            <div className="form-group">
            <label className="text-muted">Name</label>
            <input onChange={handleChange('name')} type="text" value={name} className="form-control" />
            </div>
            <div className="form-group">
            <label className="text-muted">Email</label>
            <input onChange={handleChange('email')} type="text" value={email} className="form-control"/>
            </div>
            <div className="form-group">
            <label className="text-muted">About</label>
            <input onChange={handleChange('about')} type="text" value={about} className="form-control"/>
            </div>
            <div className="form-group">
            <label className="text-muted">Password</label>
            <input type="password" onChange={handleChange('password')}  value={password} className="form-control"/>
            </div>
            <div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </div>

        </form>
    )


    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Profile updated
        </div>
    );

    const showLoading = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            Loading...
        </div>
    );

    return(
        <React.Fragment>
        <div className="container">
        <div className="row">
            <div className="col-md-4">image
            <img
            src={`${API}/user/photo/${username_for_photo}`}
            className="img img-fluid img-thumbnail mb-3"
            style={{ maxHeight: 'auto', maxWidth: '100%' }}
            alt="user profile"
        />
            
            </div>
            <div className="col-md-8">
            {showSuccess()}
            {showError()}
            {showLoading()}
            {userProfileForm()}
              
            </div>
        </div>
    </div>

        </React.Fragment>
    )

}
export default ProfileUpdate