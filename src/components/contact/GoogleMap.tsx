import React from "react";

export default function GoogleMap() {
  return (
    <>
      <section className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.8901897884666!2d30.1440677!3d30.60886039999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145f53004db75ccb%3A0x82772974ce7cb1fd!2z2LHYrdin2YrYpw!5e0!3m2!1sen!2seg!4v1742652614849!5m2!1sen!2seg"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
