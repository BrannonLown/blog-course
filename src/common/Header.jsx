import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router';

function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Stands Online Blog</h1>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link to="/" className={styles.navItem}>Home</Link>
                    </li>
                    <li>
                        <Link to="/posts" className={styles.navItem}>Blog Posts</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={styles.navItem}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;