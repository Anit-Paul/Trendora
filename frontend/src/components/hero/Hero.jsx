import { useState } from "react";
import css from "./hero.module.css";
import { FaCircle } from "react-icons/fa";
function Hero() {
  const content = [
    "New Season, New Styles - Explore the Latest Collection",
    "Trending Now: Must-Have Outfits of the Season",
    "Exclusive Collection – Limited Stock Available!",
    "Upgrade Your Wardrobe with Everyday Essentials",
  ];
  const [page, changePage] = useState(1);

  return (
    <div className={css.heroContainer}>
      <div className={css.leftText}>
        <h1>{content[page - 1]}</h1>
        <div className="myIcons">
          <FaCircle
            key={1}
            onClick={() => {
              changePage(1);
            }}
          />
          <FaCircle
            key={2}
            onClick={() => {
              changePage(2);
            }}
          />
          <FaCircle
            key={3}
            onClick={() => {
              changePage(3);
            }}
          />
          <FaCircle
            key={4}
            onClick={() => {
              changePage(4);
            }}
          />
        </div>
      </div>
      <div className={css.heroImg}>
        <img src={`/src/assets/image${page}.png`} alt="" />
      </div>
    </div>
  );
}
export default Hero;
