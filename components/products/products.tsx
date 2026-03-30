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
                        Sve što vam je potrebno da uspešno realizujete vaš građevinski projekat.
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
                            <h3 className={styles.materialCardTitle}>Vezivni materijali</h3>
                            <ul className={styles.materialsWrapper}>
                                <li className={styles.materialSingle}>cement</li>
                                <li className={styles.materialSingle}>multibat</li>
                                <li className={styles.materialSingle}>kreč</li>
                                <li className={styles.materialSingle}>gotov beton</li>
                                <li className={styles.materialSingle}>gotov malter</li>
                                <li className={styles.materialSingle}>lepak za pločice</li>
                                <li className={styles.materialSingle}>lepak za stiropor</li>
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
                            <ul className={styles.materialsWrapper}>
                                <li className={styles.materialSingle}>giter blok</li>
                                <li className={styles.materialSingle}>cigla</li>
                                <li className={styles.materialSingle}>termo blok</li>
                                <li className={styles.materialSingle}>ytong blok</li>
                                <li className={styles.materialSingle}>klima blok</li>
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
                            <ul className={styles.materialsWrapper}>
                                <li className={styles.materialSingle}>pesak</li>
                                <li className={styles.materialSingle}>šljunak</li>
                                <li className={styles.materialSingle}>kamen</li>
                                <li className={styles.materialSingle}>frakcija</li>
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
                            <ul className={styles.materialsWrapper}>
                                <li className={styles.materialSingle}>armaturna mreža</li>
                                <li className={styles.materialSingle}>šipke (rebraste i glatke)</li>
                                <li className={styles.materialSingle}>uzengije</li>
                                <li className={styles.materialSingle}>binori</li>
                                <li className={styles.materialSingle}>fert gredice</li>
                                <li className={styles.materialSingle}>fert ispune</li>
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
                            <ul className={styles.materialsWrapper}>
                                <li className={styles.materialSingle}>daske</li>
                                <li className={styles.materialSingle}>letve</li>
                                <li className={styles.materialSingle}>rogovi</li>
                                <li className={styles.materialSingle}>fosne</li>
                                <li className={styles.materialSingle}>štafle</li>
                                <li className={styles.materialSingle}>podletve</li>
                                <li className={styles.materialSingle}>OSB ploče</li>
                                <li className={styles.materialSingle}>lamperija</li>
                                <li className={styles.materialSingle}>brodski pod</li>
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
                            <ul className={styles.materialsWrapper}>
                                <li className={styles.materialSingle}>stiropor</li>
                                <li className={styles.materialSingle}>stirodur</li>
                                <li className={styles.materialSingle}>mrežica za stiropor</li>
                                <li className={styles.materialSingle}>ugaone lajsne</li>
                                <li className={styles.materialSingle}>čepasta folija</li>
                                <li className={styles.materialSingle}>paropropusna folija</li>
                                <li className={styles.materialSingle}>kondor</li>
                                <li className={styles.materialSingle}>bitulit</li>
                                <li className={styles.materialSingle}>najlon</li>
                            </ul>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-bricks">
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="9"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <path d="M12 3 V21"></path>
                                    <path d="M3 12 H21"></path>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Krovni i spoljašnji elementi</h3>
                            <ul className={styles.materialsWrapper}>
                                <li className={styles.materialSingle}>crep</li>
                                <li className={styles.materialSingle}>behaton</li>
                                <li className={styles.materialSingle}>ivičnjaci</li>
                                <li className={styles.materialSingle}>rigola</li>
                            </ul>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-bricks">
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 4 H18"></path>
                                    <path d="M9 4 V20"></path>
                                    <path d="M15 4 V20"></path>
                                    <path d="M6 20 H18"></path>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Hemija i dodatna oprema</h3>
                            <ul className={styles.materialsWrapper}>
                                <li className={styles.materialSingle}>aditivi</li>
                                <li className={styles.materialSingle}>pur pena</li>
                                <li className={styles.materialSingle}>oplatol</li>
                                <li className={styles.materialSingle}>dilatacione trake</li>
                                <li className={styles.materialSingle}>ekseri</li>
                            </ul>
                        </div>
                    </article>

                    <article className={`${styles.materialCard} reveal`} data-testid="material-bricks">
                        <div className={styles.materialCardContent}>
                            <div className={styles.materialCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="4" y="4" width="16" height="16" rx="1"></rect>
                                    <line x1="4" y1="12" x2="20" y2="12"></line>
                                    <line x1="12" y1="4" x2="12" y2="20"></line>
                                </svg>
                            </div>
                            <h3 className={styles.materialCardTitle}>Ostalo</h3>
                            <ul className={styles.materialsWrapper}>
                                <li className={styles.materialSingle}>ogrevno drvo (palete)</li>
                                <li className={styles.materialSingle}>piljevina za sušenje mesa</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Products;
