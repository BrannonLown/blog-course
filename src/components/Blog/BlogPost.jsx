import Content from './Content';
import Comments from './Comments';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import style from './BlogPost.module.css';
import axios from 'axios';

function BlogPost(props) {
    const params = useParams();

    const [loading, setLoading] = useState(true)
    const [postData, setPostData] = useState();
    const [authorData, setAuthorData] = useState();

    console.log(postData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`)
                setPostData(postRes.data);

                const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`)
                setAuthorData(authorRes.data);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            {loading ? (
                <p className={style.LoadingScreen}>Loading...</p>
            ) : (    
                <>
                    <Content 
                        title={postData.title} 
                        content={postData.body} 
                        author={authorData.name}
                    />
                    <Comments />
                </>
            )}
        </div>
    );
}

export default BlogPost;