import Link from 'next/link'
import React,{useState, useEffect } from 'react';
import Router from 'next/router' 
import {loginWithGoogle,authenticate,isAuth } from '../../actions/auth';
import LoginGoogle from 'react-google-login'

import { GOOGLE_CLIENT_ID } from '../../config';

const GoogleLogin =(req,res)=>{
    const responseGoogle=response=>{
     console.log(response)
        const tokenId = response.tokenId 
        const user = {tokenId}
        loginWithGoogle(user).then(data =>{
             if(data.error){
                 console.log(data.error)
             }else{
                  // save user to cookie
                 // authenticate user
                authenticate(data,()=>{
                    if(isAuth() && isAuth().role === 1){
                      Router.push('/admin')
                    }else{
                      Router.push('/user')
                    }
                      
                      })
             }
        })

    }
    return (
        <div className="pb-3">
        <LoginGoogle
            clientId="223483442983-9brkndcjgv329h5fk7bkq2jb703fopof.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            theme="dark"
        />
    </div>
    )
}

export default GoogleLogin