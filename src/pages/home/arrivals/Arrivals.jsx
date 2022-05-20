import React from 'react';
import './arrivals.scss';

export default function Arrivals() {
  return (
    <div className="arrival">
      <div className="arrival__title">New Arrivals</div>
      <div className="arrival__subtitle">Check out most promising product bought by our buyers</div>
      <div className="arrival__content">
        <div className="arrival__option">
          <button className="arrival">All</button>
          <button className="arrival">Men</button>
          <button className="arrival">Women</button>
          <button className="arrival">Kids</button>
        </div>
        <div className="arrival__boxs">
        <div className="arrival__box">
          <div className="arrival__card">
            <img src="https://images.unsplash.com/photo-1496360938681-9a918bfabc66?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNob3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400" alt="" />
            <div className="arrival__card-items">
            <div className="arrival__card-point">40%</div>
            <div className="arrival__card-actions">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-bag-shopping"></i>
              <i class="fa-regular fa-images"></i>
            </div>
            </div>
          </div>
          <div className="arrival__box-subtitle">
            <span>Kids</span>
            <p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </p>
          </div>
          <div className="arrival__box-title">Title somethings...</div>
          <div className="arrival__price">
            <span>$180</span><p>$300</p>
          </div>
        </div>
        <div className="arrival__box">
          <div className="arrival__card">
            <img src="https://images.unsplash.com/photo-1507274301514-7de9f124ff54?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNob3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400" alt="" />
            <div className="arrival__card-items">
              <div className="arrival__card-point">40%</div>
              <div className="arrival__card-actions">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bag-shopping"></i>
                <i class="fa-regular fa-images"></i>
              </div>
            </div>
          </div>
          <div className="arrival__box-subtitle">
            <span>Kids</span>
            <p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </p>
          </div>
          <div className="arrival__box-title">Title somethings...</div>
          <div className="arrival__price">
            <span>$180</span><p>$300</p>
          </div>
        </div>
        <div className="arrival__box">
          <div className="arrival__card">
            <img src="https://images.unsplash.com/photo-1618308820118-cfdbf282a07d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNob3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400" alt="" />
              <div className="arrival__card-items">
              <div className="arrival__card-point">40%</div>
              <div className="arrival__card-actions">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bag-shopping"></i>
                <i class="fa-regular fa-images"></i>
              </div>
            </div>
          </div>
          <div className="arrival__box-subtitle">
            <span>Kids</span>
            <p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </p>
          </div>
          <div className="arrival__box-title">Title somethings...</div>
          <div className="arrival__price">
            <span>$180</span><p>$300</p>
          </div>
        </div>
        <div className="arrival__box">
          <div className="arrival__card">
            <img src="https://images.unsplash.com/photo-1549062572-544a64fb0c56?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=400" alt="" />
            <div className="arrival__card-items">
              <div className="arrival__card-point">40%</div>
              <div className="arrival__card-actions">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bag-shopping"></i>
                <i class="fa-regular fa-images"></i>
              </div>
            </div>
          </div>
          <div className="arrival__box-subtitle">
            <span>Kids</span>
            <p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </p>
          </div>
          <div className="arrival__box-title">Title somethings...</div>
          <div className="arrival__price">
            <span>$180</span><p>$300</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
