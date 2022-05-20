import React from 'react';
import bg from '../../../images/bgPeople.png';
import pl from '../../../images/leftPeople.png';
import pr from '../../../images/rightPeople.png';
import pm from '../../../images/midPeople.png';

import './fpage.scss';

export default function FPage() {
  return (
    <div className="first">
      <div className="first__wrap">
        <div className="fl">
          <div className="fl__title">tending collection</div>
          <div className="fl__subtitle">
            Enplore Summer Collection
          </div>
          <button className="fl__button">Shop Now</button>
        </div>
        <div className="fr">
          <img src={bg} alt="" />
          <img src={pl} alt="" />
          <img src={pr} alt="" />
          <img src={pm} alt="" />
        </div>
      </div>
      <div className="first__service">
        <div className="first__service-item">
          <i class="fa-solid fa-truck"></i>
          <div className="first__service-item-content">
            <span>Free Shipping</span>
            <p>Other over $100</p>
          </div>
        </div>
        <div className="first__service-item">
          <i class="fa-solid fa-gift"></i>
          <div className="first__service-item-content">
            <span>Smart Gift Card</span>
            <p>Buy $1000 to get card</p>
          </div>
        </div>
        <div className="first__service-item">
          <i class="fa-solid fa-credit-card"></i>
          <div className="first__service-item-content">
            <span>Quick Payment</span>
            <p>100% secure payment</p>
          </div>
        </div>
        <div className="first__service-item">
          <i class="fa-solid fa-headset"></i>
          <div className="first__service-item-content">
            <span>24/7</span>
            <p>Quick Support</p>
          </div>
        </div>
      </div>
    </div>
  )
}
