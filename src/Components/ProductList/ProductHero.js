import React from "react";
import "./ProductHero.css";

export default function ProductHero() {
  return (
    <aside className="asideright">
      <div className="category-overview">
        <div className="overview">
          <img
            src="https://img.freepik.com/free-photo/car-parts-repair-garage_1170-1702.jpg?w=900&t=st=1674738259~exp=1674738859~hmac=2cc7a8e0da91fd9a15ed380d5b1f00cf3febb773891de138930796196cb75136"
            alt=""
          />
          <div className="overview-overlay">
            <span>Engines & Vechiles</span>
          </div>
        </div>
        <div className="overview">
          <img
            src="https://img.freepik.com/free-photo/front-view-notebook-cup-coffee-inspiration-mock-up-concept_155003-5347.jpg?w=900&t=st=1674738356~exp=1674738956~hmac=26fc2266e334ee9fe65e3b15b026da105b1a281562d1abbc08e33d26389f8526"
            alt=""
          />
          <div className="overview-overlay">
            <span>Laptopts & Computers</span>
          </div>
        </div>
        <div className="overview">
          <img
            src="https://img.freepik.com/free-photo/close-up-male-hand-pocket-with-modern-elegant-wristwatch_1262-16910.jpg?w=900&t=st=1674738412~exp=1674739012~hmac=75875f78c9d384e00bc0104e838098fbd2a2ea8aa0ae168ec5f10b59549c7685"
            alt=""
          />
          <div className="overview-overlay">
            <span>Mens Accessories</span>
          </div>
        </div>
        <div className="overview">
          <img
            src="https://img.freepik.com/free-photo/baby-elementson-light-blue-background_1220-4301.jpg?w=900&t=st=1674738447~exp=1674739047~hmac=160c03c286a46f75767794540f5dfb7d33a1f51e80ff3cea83b5c5613355adf2"
            alt=""
          />
          <div className="overview-overlay">
            <span>Babies Clothes</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
