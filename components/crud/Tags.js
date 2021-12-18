import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {getCookie } from '../../actions/auth'
import { create,getTags,removeTag } from '../../actions/Tags';

const Tags =()=>{
     const [values,setValues] = useState({
         name:'',
         error:false,
         success:false,
         tags:[],
         remove:false,
         reload:false
     })   
     const {name,error,success,tags,remove,reload} = values 
     const token = getCookie('token')
    // console.log(token)

     useEffect(()=>{
         loadTags()
     },[reload])
 
     const loadTags = () => {
        getTags().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, tags: data });
            }
        });
    };
        const onDeleteConfirm= name =>{
            let tagAnswer = window.confirm('are u sure to delete tag ?')
            if(tagAnswer){
                deleteTag(name)
            }
        }
        const deleteTag = name =>{
            removeTag(name,token).then(data =>{
                if(data.error){
                    console.log(data.error)
                }else{
                    setValues({ ...values, error: false, success:false, name: '', remove: !remove, reload: !reload });
                }

            })
        }
      
    
     const showTags= () => {
        return tags.map((tg, i) => {
            return (
                <button onDoubleClick ={()=> onDeleteConfirm(tg.name)}
                    title="Double click to delete"
                    key={i}
                    className="btn btn-outline-primary mr-1 ml-1 mt-3"
                >
                    {tg.name}
                </button>
            );
        });
    };
      
    const clickSubmit = e =>{
        e.preventDefault()
        //console.log(e.target.name)
        create({name},token).then(data =>{
            if(data.error){
                setValues({...values, error:data.error,success:false})
            }else{
                setValues({ ...values, error: false, success: true, name: '', reload: !reload });
            }
        })

    }
    const handleChange =e=>{
       setValues({...values, name:e.target.value, error:false,success:false,remove:''})
    }
 
    const showSuccess = () => {
        if (success) {
            return <p className="text-success">Category is created</p>;
        }
    };
    const showError =()=>{
        if(error){
            return <p className="text-danger">Category already added</p>;
        }
    }
    const showRemoved = () => {
        if (remove) {
            return <p className="text-danger">Category is removed</p>;
        }
    };

  const onMouseHandler =e=>{
    setValues({ ...values, error: false, success: false, remove: '' });
  }
    const newTagForm=()=>(
        <form onSubmit={clickSubmit}>
            <div className='form-group'>
                <label className="text-muted">Name</label>
                <input onChange={handleChange} type="text" className='form-controll' value={name} required/>
            </div>
            <div>
                <button type="submit" className='btn btn-primary center'>Create</button>
            </div>
        </form>
    )
    return(
         <React.Fragment>
         {showSuccess()}
         {showError()}
         <div onMouseMove={onMouseHandler}>
          {newTagForm()}
          {showTags()}
          </div>

          </React.Fragment>)

}
export default Tags