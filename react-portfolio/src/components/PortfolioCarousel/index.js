import { useRef, useState, useEffect } from 'react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { Pagination, Navigation, Autoplay } from 'swiper'

import './index.scss'

const PortfolioCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        //autoplay={{ delay: 3000 }}
        className="carousel"
        breakpoints={{
          // when window width is >= 320px
          520: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          720: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <div class="portfolio-card">
            <div class="portfolio-img img-one"></div>
            <div id="portfolio-text">
              <h3>DJ page</h3>
              <p>Front-end page built with HTML, CSS to promote my Djing</p>
            </div>
            <div class="portfolio-button">
              <a
                href="https://github.com/CJepps/Milestone-One"
                target="_blank"
                rel="noreferrer"
              >
                <button type="submit">Code</button>
              </a>
            </div>
            <div class="portfolio-button">
              <a
                href="https://cjepps.github.io/Milestone-One/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="submit">Site</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="portfolio-card">
            <div class="portfolio-img img-two"></div>
            <div id="portfolio-text">
              <h3>Musical Matcher</h3>
              <p>Front-end game built with HTML, CSS, and Javascript</p>
            </div>
            <div class="portfolio-button">
              <a
                href="https://github.com/CJepps/Musical-Matcher"
                target="_blank"
                rel="noreferrer"
              >
                <button type="submit">Code</button>
              </a>
            </div>
            <div class="portfolio-button">
              <a
                href="https://cjepps.github.io/Musical-Matcher/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <button type="submit">Site</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="portfolio-card">
            <div class="portfolio-img img-three"></div>
            <div id="portfolio-text">
              <h3>Simmer - recipe sharing </h3>
              <p>Recipe sharing site utilizing mongodb</p>
            </div>
            <div class="portfolio-button">
              <a
                href="https://github.com/CJepps/Simmer-recipe-sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button type="submit">Code</button>
              </a>
            </div>
            <div class="portfolio-button">
              <a
                href="https://simmer-recipes.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="submit">Site</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="portfolio-card">
            <div class="portfolio-img img-four"></div>
            <div id="portfolio-text">
              <h3>Crux climbing training site</h3>
              <p>Fullstack shopping site showcasing Django and Stripe</p>
            </div>
            <div class="portfolio-button">
              <a
                href="https://github.com/CJepps/Crux"
                target="_blank"
                rel="noreferrer"
              >
                <button type="submit">Code</button>
              </a>
            </div>
            <div class="portfolio-button">
              <a
                href="https://cjepps-crux.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="submit">Site</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default PortfolioCarousel
