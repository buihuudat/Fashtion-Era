import React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrap">
        <ul>
          <div className="footer__logo">Fashion <span>Era</span></div>
          <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</li>
        </ul>
        <ul>
          <span className='footer__title'>Help</span>
          <li>Privacy Policy</li>
          <li>Shipping & Delivery</li>
          <li>Refund Policy</li>
          <li>Track Your Order</li>
        </ul>
        <ul>
          <span className="footer__title">Store</span>
          <li>Men Fashion</li>
          <li>Women Fashion</li>
          <li>Kids Fashion <span>1254</span></li>
          <li>Other</li>
        </ul>
        <ul>
          <span className="footer__title">Support</span>
          <li>Feedback</li>
          <li>Contact us</li>
          <li>Download app</li>
          <li>Terms & condition</li>
        </ul>
      </div>
    </div>
  )
}
