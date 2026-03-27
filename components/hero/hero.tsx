import styles from './hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero} id="hero" data-testid="hero-section">
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Trusted Since 1998</span>
                    <h1 className={styles.heroTitle} data-testid="hero-title">
                        Quality Building Materials
                        <span className={styles.heroTitleAccent}>For Every Project</span>
                    </h1>
                    <p className={styles.heroText} data-testid="hero-text">
                        Your trusted partner in construction. We supply premium materials that stand the test of time, delivering strength and reliability to builders across the region.
                    </p>
                    <div className={styles.heroActions}>
                        <a href="#contact" className="btn btn--primary" data-testid="hero-cta">
                            Get In Touch
                        </a>
                        <a href="#materials" className="btn btn--outline" data-testid="hero-explore">
                            Explore Products
                        </a>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construction site" className={styles.heroImg} />
                    <div className={styles.heroImageBadge}>
                        <span className={styles.heroBadgeNumber}>25+</span>
                        <span className={styles.heroBadgeText}>Years of Excellence</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.heroStats} reveal`}>
                <div className={styles.heroStat}>
                    <span className={styles.heroStatNumber}>5000+</span>
                    <span className={styles.heroStatLabel}>Projects Completed</span>
                </div>
                <div className={styles.heroStat}>
                    <span className={styles.heroStatNumber}>150+</span>
                    <span className={styles.heroStatLabel}>Partner Companies</span>
                </div>
                <div className={styles.heroStat}>
                    <span className={styles.heroStatNumber}>100%</span>
                    <span className={styles.heroStatLabel}>Quality Guaranteed</span>
                </div>
            </div>
        </section>
    )
}

export default Hero;
