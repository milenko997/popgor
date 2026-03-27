import styles from './products.module.scss';

const Products = () => {
    return (
        <section className={`${styles.materials} section section--gray`} id="materijali" data-testid="materials-section">
            <div className="container">
                <div className="section__header">
                    <span className="sectionTag reveal">Naši proizvodi</span>
                    <h2 className="sectionTitle reveal" data-testid="materials-title">
                        Građevinski materijali
                    </h2>
                    <p className="sectionSubtitle reveal">
                        Sve što vam je potrebno da uspešno realizujete vaš građevinski projekat
                    </p>
                </div>

                <div className={styles.materialsGrid}>
                    <article className={`${styles.materialCard} reveal`} data-testid="material-timber">
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Građevinski materijali</h3>
                            <ul>
                                <li>cement</li>
                                <li>multibat</li>
                                <li>kreč</li>
                                <li>gotov beton</li>
                                <li>gotov malter</li>
                                <li>lepak za pločice</li>
                                <li>lepak za stiropor</li>
                            </ul>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-gravel">
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Blokovi i opeka</h3>
                            <ul>
                                <li>giter blok</li>
                                <li>cigla</li>
                                <li>termo blok</li>
                                <li>ytong blok</li>
                                <li>klima blok</li>
                            </ul>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-cement">
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Agregati (rasuti materijal)</h3>
                            <ul>
                                <li>pesak</li>
                                <li>šljunak</li>
                                <li>kamen</li>
                                <li>frakcija</li>
                            </ul>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-insulation">
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Armatura i konstrukcija</h3>
                            <ul>
                                <li>armaturna mreža</li>
                                <li>šipke (rebraste i glatke)</li>
                                <li>uzengije</li>
                                <li>binori</li>
                                <li>fert gredice</li>
                                <li>fert ispune</li>
                            </ul>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-roofing">
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Drvo i pločasti materijali</h3>
                            <ul>
                                <li>daske</li>
                                <li>letve</li>
                                <li>rogovi</li>
                                <li>fosne</li>
                                <li>štafle</li>
                                <li>podletve</li>
                                <li>OSB ploče</li>
                                <li>lamperija</li>
                                <li>brodski pod</li>
                            </ul>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-bricks">
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
                            <h3 className={styles.materialCardTitle}>Izolacija i hidroizolacija</h3>
                            <ul>
                                <li>stiropor</li>
                                <li>stirodur</li>
                                <li>mrežica za stiropor</li>
                                <li>ugaone lajsne</li>
                                <li>čepasta folija</li>
                                <li>paropropusna folija</li>
                                <li>kondor</li>
                                <li>bitulit</li>
                                <li>najlon</li>
                            </ul>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-bricks">
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
                            <h3 className={styles.materialCardTitle}>Krovni i spoljašnji elementi</h3>
                            <ul>
                                <li>crep</li>
                                <li>behaton</li>
                                <li>ivičnjaci</li>
                                <li>rigola</li>
                            </ul>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-bricks">
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
                            <h3 className={styles.materialCardTitle}>Hemija i dodatna oprema</h3>
                            <ul>
                                <li>aditivi</li>
                                <li>pur pena</li>
                                <li>oplatol</li>
                                <li>dilatacione trake</li>
                                <li>ekseri</li>
                            </ul>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-bricks">
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
                            <h3 className={styles.materialCardTitle}>Ostalo</h3>
                            <ul>
                                <li>ogrevno drvo (palete)</li>
                                <li>piljevina za sušenje mesa</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Products;
