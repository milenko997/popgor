import style from "./footer.module.scss";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={style.footer} data-testid="footer">
      <div className={style.container}>
        <div className={style.footerGrid}>

          <div className={style.footerBrand}>
            <a href="/" className={style.footerLogo}>
              <Image
                    src="/popgorlogo.png"
                    alt="logo"
                    width={140}
                    height={200}
                />
            </a>
            <p className={style.footerTagline}>
              Kvalitetni građevinski materijali za svaki tip gradnje. Vaš pouzdan partner u gradnji od 2011. godine.
            </p>
          </div>

          <div className={style.footerLinks}>
            <h4 className={style.footerHeading}>Linkovi</h4>
            <ul className={style.footerList}>
              <li>
                <a href="#o-nama" className={style.footerLink} data-testid="footer-about">
                  O nama
                </a>
              </li>
              <li>
                <a href="#materijali" className={style.footerLink} data-testid="footer-materials">
                  Materijali
                </a>
              </li>
              <li>
                <a href="#galerija" className={style.footerLink} data-testid="footer-gallery">
                  Galerija
                </a>
              </li>
              <li>
                <a href="#kontakt" className={style.footerLink} data-testid="footer-contact">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div className={style.footerContact}>
            <h4 className={style.footerHeading}>Kontakt informacije</h4>
            <ul className={style.footerList}>
              <li>+381 60 351 8034</li>
              <li>pop.gor071@gmail.com</li>
              <li>Bukovački put 48</li>
              <li>Petrovaradin, 21132</li>
            </ul>
          </div>

          <div className={style.footerNewsletter}>
            <h4 className={style.footerHeading}>Budite u toku</h4>
            <p className={style.footerNewsletterText}>
              Pratite najnovije informacije o novim materijalima i specijalnim ponudama.
            </p>
          </div>

        </div>

        <div className={style.footerBottom}>
          <p className={style.footerCopyright} data-testid="footer-copyright">
            &copy; 2026 PopGor. Sva prava zadržava.
          </p>
          <p className={style.footerCopyright}>Website napravio <a href="https://milenkoilic.dev/" target="_blank">Milenko Ilić</a></p>
        </div>
      </div>
    </footer>
  );
}
