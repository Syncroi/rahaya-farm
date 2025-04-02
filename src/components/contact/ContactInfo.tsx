'use client';

import React from "react";
import { useTranslations } from 'next-intl';

export default function ContactInfo() {
  const t = useTranslations();

  return (
    <section className="contact-infosectionv1 space-top overflow-hidden space-bottom">
      <div className="container">
        <div className="row g-lg-4 g-3 justify-content-center">
          
          {/* Address Box */}
          <div
            className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="contact-call-info">
              <div className="icon d-center">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="co-box">
                <h5 className="black">{t('contact.addressTitle')}</h5>
                <a href="#" className="pra">
                  {t('contact.addressLine1')} <br />
                  {t('contact.addressLine2')}
                </a>
              </div>
            </div>
          </div>

          {/* Phone Box */}
          <div
            className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="contact-call-info">
              <div className="icon d-center">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="co-box">
                <h5 className="black">{t('contact.phoneTitle')}</h5>
                <a href="#" className="pra">
                  {t('contact.phoneLine1')} <br />
                  {t('contact.phoneLine2')}
                </a>
              </div>
            </div>
          </div>

          {/* Email Box */}
          <div
            className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="contact-call-info">
              <div className="icon d-center">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="co-box">
                <h5 className="black">{t('contact.emailTitle')}</h5>
                <a href="#" className="pra">
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
