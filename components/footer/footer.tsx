import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer} data-testid="footer">
      <div className={style.container}>
        <div className={style.footerGrid}>

          <div className={style.footerBrand}>
            <a href="#hero" className={style.footerLogo}>
              Pop<span className={style.footerLogoAccent}>Gor</span>
            </a>
            <p className={style.footerTagline}>
              Quality Building Materials for Every Project. Your trusted partner in construction since 1998.
            </p>
          </div>

          <div className={style.footerLinks}>
            <h4 className={style.footerHeading}>Quick Links</h4>
            <ul className={style.footerList}>
              <li>
                <a href="#about" className={style.footerLink} data-testid="footer-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#materials" className={style.footerLink} data-testid="footer-materials">
                  Materials
                </a>
              </li>
              <li>
                <a href="#gallery" className={style.footerLink} data-testid="footer-gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className={style.footerLink} data-testid="footer-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={style.footerContact}>
            <h4 className={style.footerHeading}>Contact Info</h4>
            <ul className={style.footerList}>
              <li>+1 (555) 123-4567</li>
              <li>info@popgor.com</li>
              <li>1234 Industrial Drive</li>
              <li>Construction City, CC 12345</li>
            </ul>
          </div>

          <div className={style.footerNewsletter}>
            <h4 className={style.footerHeading}>Stay Updated</h4>
            <p className={style.footerNewsletterText}>
              Get the latest updates on new materials and special offers.
            </p>
          </div>

        </div>

        <div className={style.footerBottom}>
          <p className={style.footerCopyright} data-testid="footer-copyright">
            &copy; 2026 PopGor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
