'use client';

import { useEffect, useState } from 'react';
import styles from './header.module.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        >
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    Pop<span className={styles.logoAccent}>Gor</span>
                </a>

                <nav
                    className={`${styles.nav} ${isOpen ? styles.open : ''}`}
                >
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a href="#about" className={styles.navLink} onClick={closeMenu}>
                                About
                            </a>
                        </li>

                        <li className={styles.navItem}>
                            <a href="#materials" className={styles.navLink} onClick={closeMenu}>
                                Materials
                            </a>
                        </li>

                        <li className={styles.navItem}>
                            <a href="#gallery" className={styles.navLink} onClick={closeMenu}>
                                Gallery
                            </a>
                        </li>

                        <li className={styles.navItem}>
                            <a href="#partners" className={styles.navLink} onClick={closeMenu}>
                                Partners
                            </a>
                        </li>

                        <li className={styles.navItem}>
                            <a
                                href="#contact"
                                className={`${styles.navLink} ${styles.cta}`}
                                onClick={closeMenu}
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>

                <button
                    className={styles.menuBtn}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.menuLine}></span>
                    <span className={styles.menuLine}></span>
                    <span className={styles.menuLine}></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
