"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimoniaHomeOne() {
  const testimonials = [
    {
      name: "Karim Eid",
      designation: "CLIENT",
      image: "assets/img/testimonial/re1.png",
      description:
        "The most beautiful place to sit is the one who grows in front of you day by day",
    },
    {
      name: "Noha El-khashab",
      designation: "CLIENT",
      image: "assets/img/testimonial/re1.png",
      description:
        "  We had an amazing day in Rahaya.. Me, my kids and friends… Amazing food and quality of service.",
    },
    {
      name: "Mohamed Elashkr",
      designation: "CLIENT",
      image: "assets/img/testimonial/re1.png",
      description: "The best place to get relaxed 😊 …",
    },
    {
      name: "Mohamed Sedki",
      designation: "CLIENT",
      image: "assets/img/testimonial/re1.png",
      description: "Very promising place and excellent service",
    },
  ];
  return (
    <>
      <section className="testimonial-section testimonial-style1 section-padding">
        <div className="container">
          <div className="row g-6 align-items-center">
            <div className="col-lg-4 col-md-4">
              <div
                className="testimonial-thumbv1 w-100 wow fadeInDown"
                data-wow-delay=".4s"
              >
                <img
                  src="assets/img/testimonial/testimonial.png"
                  alt="img"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="testimonial-common-wrapper position-relative ps-xxl-5 ps-lg-4">
                <Swiper
                  spaceBetween={2}
                  loop={true}
                  slidesPerView={1}
                  speed={1300}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".cmn-prev2",
                    prevEl: ".cmn-next2",
                  }}
                  pagination={{
                    el: ".dot-cmn",
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="swiper testimonial-slidewrap01"
                >
                  {testimonials.map((item, index) => {
                    return (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="testimonail-common-items">
                          <div className="ratting d-flex align-items-center justify-content-between">
                            <img
                              src="assets/img/icon/quote-left.svg"
                              alt="icon"
                            />
                            <div className="stars">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                          <p>{item.description}</p>
                          <div className="review-man">
                            <img src={item.image} alt="img" />
                            <div className="cont">
                              <h3>{item.name}</h3>
                              <span>{item.designation}</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className="dot-cmn"></div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="assets/img/element/flower-badge.png"
          alt="img"
          className="flower-testimonial d-sm-block d-none"
        />
      </section>
    </>
  );
}
