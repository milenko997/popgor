import styles from './about.module.scss';

const About = () => {
    return (
        <section className={`${styles.about} section`} id="o-nama" data-testid="about-section">
            <div className="container">
                <div className={styles.aboutGrid}>
                    <div className={`${styles.aboutImage} reveal`}>
                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" alt="Construction Team" className={styles.aboutImg} data-testid="about-image" />
                        <div className={styles.aboutExperience}>
                            <span className={styles.aboutExperienceNumber}>15</span>
                            <span className={styles.aboutExperienceText}>godina<br />iskustva</span>
                        </div>
                    </div>
                    <div className={styles.aboutContent}>
                        <span className="sectionTag reveal">O nama</span>
                        <h2 className="sectionTitle reveal" data-testid="about-title">
                            Gradimo poverenje, projekat po projekat
                        </h2>
                        <p className={`${styles.aboutText} reveal`} data-testid="about-text">
                            Više od 15 godina, PopGor je pouzdan oslonac u realizaciji građevinskih projekata. Počeli smo kao mala porodična firma sa jasnim ciljem — da obezbedimo kvalitetne materijale na koje majstori i investitori mogu da se oslone.
                        </p>
                        <p className={`${styles.aboutText} reveal`}>
                            Danas smo prepoznati kao siguran izbor za nabavku građevinskog materijala, uz fokus na provereni kvalitet i pouzdanu isporuku u svakom trenutku.
                        </p>
                        <div className={`${styles.aboutFeatures} reveal`}>
                            <div className={styles.aboutFeature}>
                                <svg className={styles.aboutFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Vrhunski kvalitet materijala</span>
                            </div>
                            <div className={styles.aboutFeature}>
                                <svg className={styles.aboutFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Brza i pouzdana isporuka</span>
                            </div>
                            <div className={styles.aboutFeature}>
                                <svg className={styles.aboutFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Stručna podrška i savetovanje</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
