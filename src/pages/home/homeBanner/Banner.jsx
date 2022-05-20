import React from 'react';
import './banner.scss';
import girl from '../../../images/girl.png';
import men from '../../../images/men.png';
import bgBanner from '../../../images/bgBanner.png';
import kids from '../../../images/baby.png';
import bgKids from '../../../images/bgPeople.png';

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__wrap">
        <div className="banner__top">
          <div className="banner__top-girl">
            <div className="banner__top-girl-content">
              <span>Collection For Girls</span>
              <p>Up to <span>40%</span> Off</p>
              <button>Shop Now</button>
            </div>
            <img src={girl} alt="" />
          </div>
          <div className="banner__top-men">
            <div className="banner__top-men-content">
              <span>Collection For Men</span>
              <p>Up to <span>40%</span> Off</p>
              <button>Shop Now</button>
            </div>
            <img src={men} alt="" />
          </div>
        </div>
        <div className="banner__bottom">
          <div className="banner__bottom-content">
            <span>Bady & Kids Fashion</span>
            <p>
              <span>sale!</span>
              <p>07 to 14 Febuary</p>
            </p>
            <button>Shop Now</button>
          </div>
          <div className="banner__bottom-img">
            <img src={bgKids} alt="" />
            <img src={kids} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
