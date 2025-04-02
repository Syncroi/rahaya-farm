import Link from 'next/link'
import React from 'react'

export default function ServiceArea() {
  return (
    <section className="servicevm-section overflow-hidden section-padding white-bg">
      <div className="container">
        <div className="row g-xl-4 g-3 justify-content-center">

          {/* 1. Interscape Tour */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".1s">
            <div className="service-itemsv02 service-style03">
              <div className="thumb w-100">
                <img src="/assets/img/service/interscape.jpg" alt="Interscape Tour" className="w-100 mimg" />
              </div>
              <div className="content">
                <Link href="/service-details" className="title">Nursery & Bazaar Tour</Link>
                <img src="/assets/img/icon/sr1.svg" alt="icon" />
              </div>
            </div>
          </div>

          {/* 2. Bird Garden */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="service-itemsv02 service-style03">
              <div className="thumb w-100">
                <img src="/assets/img/service/birds-garden.jpg" alt="Bird Garden" className="w-100 mimg" />
              </div>
              <div className="content">
                <Link href="/service-details" className="title">Bird Garden</Link>
                <img src="/assets/img/icon/sr2.svg" alt="icon" />
              </div>
            </div>
          </div>

          {/* 3. Kids Zone */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="service-itemsv02 service-style03">
              <div className="thumb w-100">
                <img src="/assets/img/service/kids-zone.jpg" alt="Kids Zone" className="w-100 mimg" />
              </div>
              <div className="content">
                <Link href="/service-details" className="title">Visit the Duck House & Feed the Ducks</Link>
                <img src="/assets/img/icon/sr3.svg" alt="icon" />
              </div>
            </div>
          </div>

          {/* 4. Plant It Yourself */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="service-itemsv02 service-style03">
              <div className="thumb w-100">
                <img src="/assets/img/service/plant-yourself.jpg" alt="Plant It Yourself" className="w-100 mimg" />
              </div>
              <div className="content">
                <Link href="/service-details" className="title">Plant It Yourself & Take It Home</Link>
                <img src="/assets/img/icon/sr4.svg" alt="icon" />
              </div>
            </div>
          </div>

          {/* 5. Bread Making */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="service-itemsv02 service-style03">
              <div className="thumb w-100">
                <img src="/assets/img/service/bread-making.jpg" alt="Bread Making" className="w-100 mimg" />
              </div>
              <div className="content">
                <Link href="/service-details" className="title">Bake Traditional Bread</Link>
                <img src="/assets/img/icon/sr5.svg" alt="icon" />
              </div>
            </div>
          </div>

          {/* 6. Carriage Tour */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="service-itemsv02 service-style03">
              <div className="thumb w-100">
                <img src="/assets/img/service/carriage.jpg" alt="Carriage Tour" className="w-100 mimg" />
              </div>
              <div className="content">
                <Link href="/service-details" className="title">Tour by Carriage or Cart</Link>
                <img src="/assets/img/icon/sr6.svg" alt="icon" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
