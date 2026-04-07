import React, { useEffect, useRef, useState } from 'react';
import style from './Comments.module.css';
import { useToggle } from '../../hooks/useToggle'
import IndividualComment from './IndividualComment'
import { useParams } from 'react-router';
import axios from 'axios';

function Comments() {

    const params = useParams();
    console.log(params.post_id)

    const [comment, setComment] = useState({
        name: "",
        content: ""
    });
    const [show, toggleShow] = useToggle();

    const [commentList, setCommentList] = useState([]);
    
    // const addComment = (comment) => {
    //     setCommentList([...commentList, comment])
    // };

    const postComment = () => {
        axios
        .post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`, {
            name: comment.name,
            body: comment.content
        })
        .then(() => {
            const newComment = {
                name: comment.name,
                body: comment.content
            };

            setCommentList((prev) => [...prev, newComment]);

            setComment({ name: "", content: "" });
        });
    };

    return (
        <div className={style.commentZone}>
            <h2 className={style.leaveComment}>Leave Comment</h2>
            <input 
                value={comment.name}
                onChange={(e) => setComment({...comment, name: e.target.value})}

                placeholder="Username"
                className={style.addNameArea} 
            ></input>
            <textarea 
                value={comment.content}
                onChange={(e) => setComment({...comment, content: e.target.value})}
                className={style.addCommentArea} 
                placeholder="Add a comment"></textarea>
            <button 
                onClick={postComment}
                className={style.button} 
                type='submit'>Submit</button>
            <h3>Comment Section:</h3>
            <button onClick={toggleShow} className={style.button}>
                Show Comments
            </button>
            {show && (
                commentList.length === 0 ? (
                    <p>There are no comments to display</p>
                ) : (
                <ul className={style.commentList}>
                    {commentList.map((value, index) => (
                        <IndividualComment value={value} />
                    ))}
                </ul>
                )
            )}
            
        </div>
    )
}

export default Comments;