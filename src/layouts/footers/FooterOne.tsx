'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function FooterOne() {
  const t = useTranslations();

  return (
    <footer className="footer-section overflow-hidden position-relative footer-style1">
      <div className="footer-widgets-wrapper footer-widget-wrapperv01">
        <div className="container">
          <div className="row g-md-4 g-4 justify-content-between">
            {/* Logo & Address */}
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/" className="footer-logo">
                    <Image
                      src="/assets/rahayalogo.jpg"
                      width={100}
                      height={100}
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <p className="pre-pragraph">
                    {t("footer.addressLine1")} <br />
                    {t("footer.addressLine2")}
                  </p>
                  <div className="social-wrapper social-empact d-flex align-items-center">
                    {/* Social icons */}
                    <a target="_blank" href="https://www.facebook.com/people/Rahaya-farm/61568240136934/" className="white-clr">
                      <i className="white-clr fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="white-clr">
                      <i className="white-clr fab fa-twitter"></i>
                    </a>
                    <a href="#" className="white-clr">
                      <i className="white-clr fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="white-clr">
                      <i className="white-clr fa-brands fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3 className="white-clr">{t("footer.servicesTitle")}</h3>
                </div>
                <ul className="list-area">
                  <li><a href="#"><i className="fa-solid fa-angle-right"></i>{t("footer.services.0")}</a></li>
                  <li><a href="#"><i className="fa-solid fa-angle-right"></i>{t("footer.services.1")}</a></li>
                  <li><a href="#"><i className="fa-solid fa-angle-right"></i>{t("footer.services.2")}</a></li>
                  <li><a href="#"><i className="fa-solid fa-angle-right"></i>{t("footer.services.3")}</a></li>
                </ul>
              </div>
            </div>

            {/* Links */}
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3 className="white-clr">{t("footer.linksTitle")}</h3>
                </div>
                <ul className="list-area">
                  <li><Link href="/about">{t("footer.links.about")}</Link></li>
                  <li><Link href="/service">{t("footer.links.service")}</Link></li>
                  <li><Link href="/faq">{t("footer.links.faq")}</Link></li>
                  <li><Link href="/blog">{t("footer.links.blog")}</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3 className="white-clr">{t("footer.contactTitle")}</h3>
                </div>
                <ul className="list-area list-contact">
                  <li><a href="#"><i className="fa-solid fa-envelope"></i>MohamedKh@Syncroi.com</a></li>
                  <li><a href="#"><i className="fa-solid fa-location-dot"></i>{t("footer.addressLine1")}<br />{t("footer.addressLine2")}</a></li>
                  <li><a href="tel:01114288800"><i className="fa-solid fa-phone"></i>01114288800</a></li>
                  <li><a target="_blank" href="https://wa.me/201206104083"><FaWhatsapp className="my-auto" fill="lightgreen" />01206104083</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper footer-wrapperv01 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center">
            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
              © Syncroi {new Date().getFullYear()}. {t("footer.rights")}
            </p>
            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
              <li><Link href="/contact">{t("footer.terms")}</Link></li>
              <li><Link href="/contact">{t("footer.privacy")}</Link></li>
              <li><Link href="/contact">{t("footer.contactUs")}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <img
        src="/assets/img/footer/footer-wheat.png"
        alt="img"
        className="footer-wheat position-absolute"
      />
    </footer>
  );
}
