import Link from 'next/link';
import React,{ useState } from 'react';
import { emailContactForm } from '../../actions/Form';


const ContactForm = ({authorEmail})=>{

    const [values,setValues] = useState({
        name:'',
        email:'',
        message:'',
        buttonText:'send textmsg',
        sent:false,
        success:false,
        error:false
    })
    const { name,email,message,buttonText,sent,success,error}= values

    const clickSubmit = e=>{
        e.preventDefault();
        setValues({ ...values, buttonText: 'Sending...' });
       // console.log(values)
       emailContactForm({authorEmail,name,email,message}).then(data =>{
           if(data.error){
               setValues({...values, error:data.error})
           }else{
               setValues({...values,sent:true, name:'',email:'',message:'',buttonText:'sent',success :data.success })
           }
       })
    }
    const handleChange =(name)=>e=>{
        setValues({...values, [name]:e.target.value, error:false,success:false,buttonText:'send text'})
    }
    const showSuccess =()=>success && <div className="alert alert-info">Thank you for contacting us.</div>

    const showError =()=>{
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    }
    const ShowContactForm =()=>{
        return (
            <form onSubmit={clickSubmit}>
            <div className="form-group">
            <label className="lead">Message</label>
            <textarea
                onChange={handleChange('message')}
                type="text"
                className="form-control"
                value={message}
                required
                rows="10"
            ></textarea>
        </div>

        <div className="form-group">
            <label className="lead">Name</label>
            <input type="text" onChange={handleChange('name')} className="form-control" value={name} required />
        </div>

        <div className="form-group">
            <label className="lead">Email</label>
            <input
                type="email"
                onChange={handleChange('email')}
                className="form-control"
                value={email}
                required
            />
        </div>

        <div>
            <button className="btn btn-primary">{buttonText}</button>
        </div>
                
            </form>
        )
    }
    return (
        <React.Fragment>
            <p>show contact form</p>
            {showError()}
            {showSuccess()}
            {ShowContactForm()}
        </React.Fragment>
    );

}
export default ContactForm

