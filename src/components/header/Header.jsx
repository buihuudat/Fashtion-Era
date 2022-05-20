import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrap">
        <div className="header__logo">Fashtion <span>Era</span></div>
        <ul className="header__links">
          <li className="header__link"><a href="">Men</a></li>
          <li className="header__link"><a href="">Women</a></li>
          <li className="header__link"><a href="">Kids</a></li>
          <li className="header__link"><a href="">Winter</a></li>
          <li className="header__link"><a href="">Lifestyle</a></li>
        </ul>
        <div className="header__search">
          <input type="text" placeholder='Search' />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="header__icons">
          <i class="fa-solid fa-cart-shopping noti"></i>
          <i class="fa-solid fa-heart noti"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  )
}
