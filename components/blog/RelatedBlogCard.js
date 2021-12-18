
import Link from 'next/link';
import { API } from './../../config';
import moment from 'moment';
import renderHTML from 'react-render-html';



const RealtedBlogCard =({blog})=>{     
    
    
    return (
        <div className="card border-1">
        <section>
        <Link href={`/blog/${blog.slug}`}> 
        <a href="">
        <img className='img img-fluie'
        style={{ maxHeight: '200px', width: 'auto' }}
         src={`${API}/blog/photo/${blog.slug}`} 
         alt={blog.title}
         />
        </a>
        </Link>
        
        </section>
        <div className="card-body">
        <section>
            <Link href={`/blogs/${blog.slug}`}>
                <a>
                    <h5 className="card-title">{blog.title}</h5>
                </a>
            </Link>
            <p className="card-text">{renderHTML(blog.excerpt)}</p>
            </section>
            </div>

            <div className="card-body">
            Posted {moment(blog.updatedAt).fromNow()} by{' '}
            <Link href={`/profile/${blog.postedBy.username}`}>
                <a>{blog.postedBy.username}</a>
            </Link>
            
        </div>
        </div>
    
  
    )
    
}
export default  RealtedBlogCard
