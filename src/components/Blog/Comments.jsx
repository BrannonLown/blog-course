import React, { useEffect, useRef, useState } from 'react';
import style from './Comments.module.css';
import { useToggle } from '../../hooks/useToggle'
import IndividualComment from './IndividualComment'
import { useParams } from 'react-router';
import axios from 'axios';
import { useUsername } from '../authWrapper/AuthContext';

function Comments() {

    const params = useParams();
    console.log(params.post_id)
    const username = useUsername();

    const [comment, setComment] = useState({
        content: ""
    });
    const [show, toggleShow] = useToggle();

    const [commentList, setCommentList] = useState([]);

    const postComment = () => {
        axios
        .post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`, {
            name: username,
            body: comment.content
        })
        .then((res) => {
            console.log(res);
            
            const newComment = {
                name: username,
                body: comment.content
            };
            setCommentList((prev) => [...prev, newComment]);
        });
    };

    return (
        <div className={style.commentZone}>
            {username ? 
                <div>
                    <h2 className={style.leaveComment}>Leave Comment</h2>
                    <textarea 
                        value={comment.content}
                        onChange={(e) => setComment({...comment, content: e.target.value})}
                        className={style.addCommentArea} 
                        placeholder="Add a comment"></textarea>
                    <button 
                        onClick={postComment}
                        className={style.button} 
                        type='submit'>Submit</button>
                </div>
                :
                <p className={style.NotAvailable}>Commenting not available for Travellers, become a Stand User to leave a comment!</p>
            }
            
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