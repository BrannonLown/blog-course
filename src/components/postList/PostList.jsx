import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { Link } from 'react-router'
import style from './PostList.module.css'

function PostList() {
  return (
    <div>
        <Header />
        <h1 className={style.postsHeader}>Blog Posts Page</h1>
        <Link to="/posts/1" className={style.BlogPost}>Post #1</Link>
        <Link to="/posts/2" className={style.BlogPost}>Post #2</Link>
        <Link to="/posts/3" className={style.BlogPost}>Post #3</Link>
        <Footer />
    </div>
  )
}

export default PostList