import React from "react";

export default function ContactInfo() {
  return (
    <>
      <section className="contact-infosectionv1 space-top overflow-hidden space-bottom">
        <div className="container">
          <div className="row g-lg-4 g-3 justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">Address</h5>
                  <a href="#" className="pra">
                    Cairo Alexandria desert road <br />
                    km 80, Cairo, Egypt
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">Talk With Us</h5>
                  <a href="#" className="pra">
                    Phone number: +20 1114288800 <br />
                    WhatsApp:
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">Send us email</h5>
                  <a href="#" className="pra">
                    MohamedKh@Syncroi.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
