import React from 'react';
import style from './Content.module.css';

function Content({ title, content, author }) {
    return (
        <main className={style.mainStuff}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.words}>{content}</p>
            <p className={style.author}>
                <strong>Author:</strong> {author}
            </p>
        </main>
    )
}

export default Content;