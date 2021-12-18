import React,{ useState, useEffect } from 'react';
import Link from 'next/link';
import Router,{withRouter} from 'next/router';
import dynamic from 'next/dynamic'
import { getCookie,isAuth } from '../../actions/auth';
import {getCategories } from '../../actions/category'
import {getTags} from '../../actions/Tags'
import {singleBlog,updateBlogManage } from './../../actions/blog';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { API } from '../../config';
import '../../node_modules/react-quill/dist/quill.snow.css';



const BlogUpdate =({router})=>{
    const [categories,setCategories] = useState([])
    const [tags,setTags ] = useState([])


    const [checked, setChecked] = useState([]); // categories
    const [checkedTag, setCheckedTag] = useState([]); // tags
   
    const [body,setBody] = useState('')
    const [values,setValues] =useState({
        // error: '',
        // success: '',
        // formData: new FormData(),
        // title: '',
        // body: ''

        title: '',
        error: '',
        success: '',
        formData: '',
        title: '',
        body: ''
   })
const {error,success,title,formData} = values
const token =getCookie('token')

    useEffect(()=>{
        setValues({...values, formData: new FormData()})
         initialLoadBlog()
         initiateCategory();
         initiateTags();
    },[router])
       // console.log(blogs)


    const initialLoadBlog=()=>{
        if(router.query.slug){
            singleBlog(router.query.slug).then(data => {
                if(data.error){
                    console.log(data.error)
                }else{
                    setValues({...values, title:data.title})
                    setBody(data.body)
                    setCategoriesArray(data.categories)
                    setTagsArray(data.tags)
                
                }
            })
        }
    }


    const initiateCategory = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setCategories(data);
            }
        });
    };
    
       const initiateTags = () => {
        getTags().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setTags(data);
            }
        });
    };

    const setCategoriesArray = blogCategories => {
        let ca = [];
        blogCategories.map((c, i) => {
            ca.push(c._id);
        });
        setChecked(ca); //set checkedCats = useState
    };
    const setTagsArray = blogTags =>{
        let ta =[]
        blogTags.map((t,i)=>{
            ta.push(t._id)
        })
        setCheckedTag(ta);
    }


    const handleToggle = c =>()=>{
       
        setValues({...values,error:''})
        const clickedCheckedCategory = checked.indexOf(c)
        //console.log(clickedCheckedCategory)
        const all = [...checked]
        if(clickedCheckedCategory === -1){
            all.push(c)
        }else{
            all.splice(clickedCheckedCategory,1)
        }
          console.log(all)
          setChecked(all)
          formData.set('categories',all)
    }


    const handleToggleTags =t =>()=>{
        setValues({...values,error:''})
        const clickedCheckedTags = checkedTag.indexOf(t)
        const all =[...checkedTag]
        if(clickedCheckedTags === -1){
            all.push(t)
        }else{
            all.splice(clickedCheckedTags,1)
        }
        console.log(all)
        setCheckedTag(all);
        formData.set('tags',all)
    }
    
    const existChkdCategory= c => {
        const result = checked.indexOf(c);
        if (result !== -1) {
            return true;
        } else {
            return false;
        }
    };
    const existChkdTags= t => {
        const result = checkedTag.indexOf(t);
        if (result !== -1) {
            return true;
        } else {
            return false;
        }
    };
    
    
     const showCategories=()=>{
         return (
             categories && categories.map((c,i)=>( 
                 <li key={i} className="list-unstyled">
                     <input onChange={handleToggle(c._id)} 
                     checked ={existChkdCategory(c._id)}
                     type="checkbox" className="mr-2" />
                     <label className="form-check-label">{c.name}</label>
                 </li>
             ))
           
             
         )
     }
     const showTags=()=>{
         return (
             tags && tags.map((t,i)=>( 
                 <li key={i} className="list-unstyled">
                     <input onChange={handleToggleTags(t._id)}
                     checked ={existChkdTags(t._id)} 
                     type="checkbox" className="mr-2" />
                     <label className="form-check-label">{t.name}</label>
                 </li>
             ))
           
             
         )
     }

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };

    const handleBody= e =>{
        setBody(e)
        formData.set('body', e);
    }

    const editBlog = e =>{
       // console.log('updat3e')
       e.preventDefault();
       let formData = new FormData();
       formData.append("title", values.title);
       formData.append("body", body);

       updateBlogManage(formData,token,router.query.slug).then(data =>{
           if(data.error){
               setValues({...values, error:data.error})
           }else{
            setValues({...values,title:'',success:`blog updata of title "${data.title}" has updataed `})
            if(isAuth() && isAuth().role === 1){
                setTimeout(() => {
                    Router.reload();
                  }, 500);
                  Router.push(`/blogs`);
               // Router.replace('/admin')
               //Router.replace(`/admin/crud/${router.query.slug}`);
            }else{
               
                // Router.replace('/user')
               // Router.replace(`/user/crud/${router.query.slug}`);
            }
           }
       })
    }

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            {success}
        </div>
    );


    const updateBlogForm = () => {
        return (
            <form onSubmit={editBlog}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" className="form-control" value={title} onChange={handleChange('title')} />
                </div>

                <div className="form-group">
                    <ReactQuill
                    modules={BlogUpdate.modules}
                    formats={BlogUpdate.formats}
                        value={body}
                        placeholder="Write something amazing..."
                        onChange={handleBody}
                    />
                </div>

                <div>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </div>
            </form>
        );
    };
    return (
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-8'>
            <div className='p-3'>
                   {showError()}
              {showSuccess()} 
            </div>
          
               <hr/>
            <div className='col-md-12'>
              {updateBlogForm()}   
            </div>
            {body && (
                <img src={`${API}/blog/photo/${router.query.slug}`} alt={title} style={{ width: '100%',marginTop:'20px' }} />
            )}
           

          
            </div>
            <div className='col-md-4'>
               <div className='form-group'>
                   <h5>Upload Blog image</h5>
                   <label className='btn btn-info'>image upload
                   <input type="file"  />
                   </label>
               </div>
               <h5>Category</h5>
               <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                   {showCategories()}
               </ul>
               <hr/>
               <h5>Tags</h5>
               <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                   {showTags()}
               </ul>
               
            </div>
        </div>
         
        
        </div>
        )
}

BlogUpdate.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
};
 
BlogUpdate.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
];
export default withRouter(BlogUpdate)