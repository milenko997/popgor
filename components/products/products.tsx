import styles from './products.module.scss';

const Products = () => {
    return (
        <section className={`${styles.materials} section section--gray`} id="materials" data-testid="materials-section">
            <div className="container">
                <div className="section__header">
                    <span className="sectionTag reveal">Our Products</span>
                    <h2 className="sectionTitle reveal" data-testid="materials-title">
                        Construction Materials
                    </h2>
                    <p className="sectionSubtitle reveal">
                        Everything you need to bring your construction vision to life
                    </p>
                </div>
                
                <div className={styles.materialsGrid}>
                    <article className={`${styles.materialCard} reveal`} data-testid="material-timber">
                        <div className={styles.materialCardImage}>
                            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" alt="Cut Timber" className={styles.materialCardImg} />
                        </div>
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Cut Timber</h3>
                            <p className={styles.materialCardText}>Premium quality lumber in various dimensions. Perfect for framing, decking, and structural applications.</p>
                            <a href="#contact" className={styles.materialCardLink}>Learn More →</a>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-gravel">
                        <div className={styles.materialCardImage}>
                            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80" alt="Gravel and Sand" className={styles.materialCardImg} />
                        </div>
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Gravel & Sand</h3>
                            <p className={styles.materialCardText}>Various grades of aggregates for foundations, drainage, and concrete mixing. Bulk delivery available.</p>
                            <a href="#contact" className={styles.materialCardLink}>Learn More →</a>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-cement">
                        <div className={styles.materialCardImage}>
                            <img src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&q=80" alt="Cement Bags" className={styles.materialCardImg} />
                        </div>
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Cement & Concrete</h3>
                            <p className={styles.materialCardText}>High-strength Portland cement and ready-mix concrete for all structural needs.</p>
                            <a href="#contact" className={styles.materialCardLink}>Learn More →</a>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-insulation">
                        <div className={styles.materialCardImage}>
                            <img src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=400&q=80" alt="Insulation Materials" className={styles.materialCardImg} />
                        </div>
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Insulation Materials</h3>
                            <p className={styles.materialCardText}>Thermal and acoustic insulation solutions. Fiberglass, foam board, and mineral wool options.</p>
                            <a href="#contact" className={styles.materialCardLink}>Learn More →</a>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-roofing">
                        <div className={styles.materialCardImage}>
                            <img src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&q=80" alt="Roofing Materials" className={styles.materialCardImg} />
                        </div>
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Roofing Materials</h3>
                            <p className={styles.materialCardText}>Complete roofing solutions including shingles, metal sheets, underlayment, and accessories.</p>
                            <a href="#contact" className={styles.materialCardLink}>Learn More →</a>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-bricks">
                        <div className={styles.materialCardImage}>
                            <img src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?w=400&q=80" alt="Construction Bricks" className={styles.materialCardImg} />
                        </div>
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="3" y1="15" x2="21" y2="15"></line>
                                    <line x1="9" y1="3" x2="9" y2="9"></line>
                                    <line x1="15" y1="9" x2="15" y2="15"></line>
                                    <line x1="9" y1="15" x2="9" y2="21"></line>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Construction Bricks</h3>
                            <p className={styles.materialCardText}>Standard and decorative bricks for walls, facades, and landscaping projects.</p>
                            <a href="#contact" className={styles.materialCardLink}>Learn More →</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Products;
