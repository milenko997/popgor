import styles from './about.module.scss';

const About = () => {
    return (
        <section className={`${styles.about} section`} id="about" data-testid="about-section">
            <div className="container">
                <div className={styles.aboutGrid}>
                    <div className={`${styles.aboutImage} reveal`}>
                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" alt="Construction Team" className={styles.aboutImg} data-testid="about-image" />
                        <div className={styles.aboutExperience}>
                            <span className={styles.aboutExperienceNumber}>25</span>
                            <span className={styles.aboutExperienceText}>Years<br />Experience</span>
                        </div>
                    </div>
                    <div className={styles.aboutContent}>
                        <span className="sectionTag reveal">About PopGor</span>
                        <h2 className="sectionTitle reveal" data-testid="about-title">
                            Building Trust, One Project at a Time
                        </h2>
                        <p className={`${styles.aboutText} reveal`} data-testid="about-text">
                            For over 25 years, PopGor has been the backbone of construction projects across the region. We started as a small family business with a simple mission: provide builders with materials they can trust.
                        </p>
                        <p className={`${styles.aboutText} reveal`}>
                            Today, we've grown into one of the leading construction material suppliers, but our core values remain unchanged. Every bag of cement, every piece of timber, and every load of gravel meets our rigorous quality standards.
                        </p>
                        <div className={`${styles.aboutFeatures} reveal`}>
                            <div className={styles.aboutFeature}>
                                <svg className={styles.aboutFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Premium Quality Materials</span>
                            </div>
                            <div className={styles.aboutFeature}>
                                <svg className={styles.aboutFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Fast & Reliable Delivery</span>
                            </div>
                            <div className={styles.aboutFeature}>
                                <svg className={styles.aboutFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Expert Technical Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
