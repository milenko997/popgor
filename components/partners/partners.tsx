'use client';

import styles from './partners.module.scss';

const partners = [
    'BuildCorp',
    'StructurePro',
    'CementWorks',
    'TimberTech',
    'SteelMasters',
    'RoofKing'
];

const Partners = () => {
    return (
        <section
            className={`section section--gray ${styles.partners}`}
            id="partners"
        >
            <div className="container">
                <div className="section__header">
                    <span className="section__tag reveal">Trusted By</span>
                    <h2 className="section__title reveal">
                        Our Partners
                    </h2>
                    <p className="section__subtitle reveal">
                        Working with industry leaders to deliver the best
                    </p>
                </div>

                <div className={styles.partnersCarousel}>
                    <div className={styles.partnersTrack}>
                        {[...partners, ...partners].map((partner, index) => (
                            <div key={index} className={styles.partnersSlide}>
                                <div className={styles.partnersLogo}>{partner}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;