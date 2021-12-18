// import Link from 'next/link';
// import React,{ useState, useEffect } from 'react';
// import Router from 'next/router';
// import { getCookie, isAuth } from '../../actions/auth';
// import { list, removeBlog } from '../../actions/blog';

// const BlogRead = () => {
//     return (
//         <React.Fragment>
//             <p>update delete blogs</p>
//         </React.Fragment>
//     );
// };

// export default BlogRead;


import Link from 'next/link';
import React,{ useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { blogsListForAdmin} from '../../actions/blog';
import moment from 'moment';

const BlogRead = () => {
    const [blogs, setBlogs] = useState([]);
    //const [message, setMessage] = useState('');
   // const token = getCookie('token');

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        blogsListForAdmin().then(data => {
            console.log(data)
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
            }
        });
    };




    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
           
                <div key={i} className="pb-5">
                    <h3>{blog.title}</h3>
                    <p className="mark">
                        Written by {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()}
                    </p>
                   
                </div>
            
        });
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    
                   {showAllBlogs()}
                </div>
            </div>
        </React.Fragment>
    );
};

export default BlogRead;
 /* {JSON.stringify(blogs)} */