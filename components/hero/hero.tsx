import styles from './hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero} id="pocetna" data-testid="hero-section">
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Od 2011. godine uz vas</span>
                    <h1 className={styles.heroTitle} data-testid="hero-title">
                        Kvalitetni građevinski materijali
                        <span className={styles.heroTitleAccent}>za svaki projekat</span>
                    </h1>
                    <p className={styles.heroText} data-testid="hero-text">
                        Vaš pouzdan partner u gradnji. Nudimo vrhunske materijale koji garantuju dugotrajnost, čvrstinu i sigurnost — za sve vrste građevinskih radova.
                    </p>
                    <div className={styles.heroActions}>
                        <a href="#kontakt" className="btn btn--primary" data-testid="hero-cta">
                            Kontaktirajte nas
                        </a>
                        <a href="#materijali" className="btn btn--outline" data-testid="hero-explore">
                            Istražite proizvode
                        </a>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construction site" className={styles.heroImg} />
                    <div className={styles.heroImageBadge}>
                        <span className={styles.heroBadgeNumber}>15+</span>
                        <span className={styles.heroBadgeText}>godina uspešnog poslovanja</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.heroStats} reveal`}>
                <div className={styles.heroStat}>
                    <span className={styles.heroStatNumber}>5000+</span>
                    <span className={styles.heroStatLabel}>realizovanih projekata</span>
                </div>
                <div className={styles.heroStat}>
                    <span className={styles.heroStatNumber}>150+</span>
                    <span className={styles.heroStatLabel}>partnerskih kompanija</span>
                </div>
                <div className={styles.heroStat}>
                    <span className={styles.heroStatNumber}>100%</span>
                    <span className={styles.heroStatLabel}>garantovan kvalitet</span>
                </div>
            </div>
        </section>
    )
}

export default Hero;
