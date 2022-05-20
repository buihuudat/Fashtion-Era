import React from 'react';
import img from '../../../images/imgReview.png';

import './review.scss';

export default function Review() {
  return (
    <div className="review">
      <div className="review__title">Reviews</div>
      <div className="review__sub">This is what our customers have to say</div>
      <div className="review__content">
        <img src={img} alt="" />
        <div>
          <span>There are many variations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias consectetur iste temporibus, ipsam facere dignissimos earum architecto, deserunt iusto rem a magni nemo eos at quisquam dolores! Placeat, nulla.</span>
          <p>Sameer Jain</p>
        </div>
      </div>
    </div>
  )
}
