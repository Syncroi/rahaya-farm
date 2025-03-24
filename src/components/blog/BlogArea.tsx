"use client"
import React from 'react'

export default function BlogArea() {
  return (
    <section className="blog-section overflow-hidden section-padding white-bg">
      <div className="container">
        <div className="row g-xl-4 g-4 justify-content-center">
          <div className="col-lg-8">
            <div className="blog-details-big pe-xl-2">

              {/* Universities & Schools Pack */}
              <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".2s">
                <div className="thumb position-relative">
                  <img src="assets/img/blog/school.jpg" alt="Universities & Schools Pack" />
                  <span className="date-badge">New</span>
                </div>
                <div className="content">
                  <ul className="comment-inner">
                    <li>
                      <span><i className="fa-regular fa-graduation-cap"></i> Schools & Universities</span>
                    </li>
                    <li>
                      <span><i className="fa-regular fa-user"></i> Rahaya Farm</span>
                    </li>
                  </ul>
                  <h3 className="titles">Educational & Fun Programs for Schools & Universities</h3>
                  <p>
                    Enjoy a fun and educational day in nature. The package includes planting workshops, hands-on farm activities, games, and healthy meals specially designed for students.
                  </p>
                  <button className="cmn-btn primary-border" disabled>
                    View Package Details
                    <i className="fa-solid fa-arrow-right p1-clr"></i>
                  </button>
                </div>
              </div>

              {/* Corporate Pack */}
              <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".3s">
                <div className="thumb position-relative">
                  <img src="assets/img/blog/corp.jpg" alt="Corporate Pack" />
                  <span className="date-badge">New</span>
                </div>
                <div className="content">
                  <ul className="comment-inner">
                    <li>
                      <span><i className="fa-regular fa-building"></i> Corporate</span>
                    </li>
                    <li>
                      <span><i className="fa-regular fa-user"></i> Rahaya Farm</span>
                    </li>
                  </ul>
                  <h3 className="titles">Corporate & Team Building Day</h3>
                  <p>
                    A full day of bonding and fun for your team in a peaceful farm setting. Includes group games, farm experiences, countryside meals, and areas for meetings or team activities.
                  </p>
                  <button className="cmn-btn primary-border" disabled>
                    View Package Details
                    <i className="fa-solid fa-arrow-right p1-clr"></i>
                  </button>
                </div>
              </div>

              {/* Events Pack */}
              <div className="blog-details-leftitem wow fadeInUp" data-wow-delay=".4s">
                <div className="thumb position-relative">
                  <img src="assets/img/blog/event.jpg" alt="Events Pack" />
                  <span className="date-badge">New</span>
                </div>
                <div className="content">
                  <ul className="comment-inner">
                    <li>
                      <span><i className="fa-regular fa-calendar-check"></i> Events</span>
                    </li>
                    <li>
                      <span><i className="fa-regular fa-user"></i> Rahaya Farm</span>
                    </li>
                  </ul>
                  <h3 className="titles">Events & Celebrations on the Farm</h3>
                  <p>
                    Celebrate birthdays, family gatherings, or special occasions at Rahaya with a countryside setting, delicious food, entertainment activities, and beautiful outdoor areas.
                  </p>
                  <button className="cmn-btn primary-border" disabled>
                    View Package Details
                    <i className="fa-solid fa-arrow-right p1-clr"></i>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Optional right column (currently empty) */}
          <div className="col-lg-4"></div>
        </div>
      </div>
    </section>
  )
}
