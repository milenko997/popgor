'use client';

import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import Image from 'next/image';

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
                    <Image
                        src="/popgor_logo_dark.png"
                        alt="logo"
                        width={130}
                        height={100}
                    />
                </a>

                <nav
                    className={`${styles.nav} ${isOpen ? styles.open : ''}`}
                >
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a href="#o-nama" className={styles.navLink} onClick={closeMenu}>
                                O nama
                            </a>
                        </li>

                        <li className={styles.navItem}>
                            <a href="#materijali" className={styles.navLink} onClick={closeMenu}>
                                Materijali
                            </a>
                        </li>

                        <li className={styles.navItem}>
                            <a href="#galerija" className={styles.navLink} onClick={closeMenu}>
                                Galerija
                            </a>
                        </li>

                        <li className={styles.navItem}>
                            <a href="#partneri" className={styles.navLink} onClick={closeMenu}>
                                Partneri
                            </a>
                        </li>

                        <li className={styles.navItem}>
                            <a
                                href="#kontakt"
                                className={`${styles.navLink} ${styles.cta}`}
                                onClick={closeMenu}
                            >
                                Kontakt
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
