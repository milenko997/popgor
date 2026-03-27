'use client';

import styles from './contact.module.scss';

const Contact = () => {
    return (
        <section className={`section ${styles.contact}`} id="kontakt">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title reveal">
                        Kontaktirajte nas
                    </h2>
                    <p className="section__subtitle reveal">
                        Spremni ste da započnete radove? Tu smo da odgovorimo na sva vaša pitanja.
                    </p>
                </div>

                <div className={styles.contactGrid}>
                    <div className={`reveal ${styles.contactInfo}`}>
                        <div className={styles.contactCard}>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Telefon</h4>
                                    <a href="tel:+381603518034">+381 60 351 8034</a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:pop.gor071@gmail.com">pop.gor071@gmail.com</a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Adresa</h4>
                                    <p>
                                        Bukovački put 48<br />
                                        Petrovaradin, 21132
                                    </p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Radno vreme</h4>
                                    <p>
                                        Ponedeljak - Petak: 07:00 - 15:30<br />
                                        Subota: 07:00 - 14:00<br />
                                        Nedelja: Ne radimo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.contactMap} reveal`}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.1802305763867!2d19.88467937694462!3d45.22392174943755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1acd0ab35e61%3A0x2867a9dfdb11a962!2sPOP-GOR!5e0!3m2!1ssr!2srs!4v1774649311140!5m2!1ssr!2srs"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
