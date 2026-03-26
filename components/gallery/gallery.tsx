'use client';

import { useState, useEffect } from 'react';
import styles from './gallery.module.scss';

const images = [
    {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
        alt: 'Construction Project 1',
        large: true
    },
    {
        src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80',
        alt: 'Construction Project 2'
    },
    {
        src: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&q=80',
        alt: 'Construction Project 3'
    },
    {
        src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&q=80',
        alt: 'Construction Project 4'
    },
    {
        src: 'https://images.unsplash.com/photo-1590644365607-1c5a4e3a43a5?w=400&q=80',
        alt: 'Construction Project 5'
    },
    {
        src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=80',
        alt: 'Construction Project 6'
    }
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const isOpen = currentIndex !== null;

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setCurrentIndex(null);
        document.body.style.overflow = '';
    };

    const nextImage = () => {
        setCurrentIndex((prev: number | null) =>
            prev !== null ? (prev + 1) % images.length : 0
        );
    };

    const prevImage = () => {
        setCurrentIndex((prev: number | null) =>
            prev !== null ? (prev - 1 + images.length) % images.length : 0
        );
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        };

        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [isOpen]);

    return (
        <>
            <section className={`${styles.gallery} section`} id="gallery">
                <div className="container">
                    <div className="section__header">
                        <span className="sectionTag">Our Work</span>
                        <h2 className="sectionTitle">Project Gallery</h2>
                        <p className="sectionSubtitle">
                            See our materials in action across various construction projects
                        </p>
                    </div>

                    <div className={styles.galleryGrid}>
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`${styles.galleryItem} ${img.large ? styles.galleryItemLarge : ''}`}
                                onClick={() => openLightbox(index)}
                            >
                                <img src={img.src} alt={img.alt} className={styles.galleryImg} />

                                <div className={styles.galleryOverlay}>
                                    <span className={styles.galleryZoom}>
                                        +
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {isOpen && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <button className={styles.lightboxClose} onClick={closeLightbox}>
                        ✕
                    </button>

                    <button
                        className={styles.lightboxPrev}
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                    >
                        ‹
                    </button>

                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className={styles.lightboxImg}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        className={styles.lightboxNext}
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                    >
                        ›
                    </button>
                </div>
            )}
        </>
    );
};

export default Gallery;