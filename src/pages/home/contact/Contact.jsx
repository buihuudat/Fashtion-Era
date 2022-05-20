import React from 'react';
import icon from '../../../images/icon.png';

import './contact.scss';

export default function Contact() {
  return (
    <div className="contact">
      <img src={icon} alt="" />
      <div className="contact__title">Subscribe Newsletter</div>
      <div className="contact__sub">Subscribe to our email and get updates right in your inbox</div>
      <div className="contact__input">
        <input type="text" placeholder='Enter your Email' />
        <i class="fa-solid fa-paper-plane"></i>
      </div>
      <div className="contact__socials">
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  )
}
