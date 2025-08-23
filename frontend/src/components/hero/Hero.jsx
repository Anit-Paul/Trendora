import { useEffect, useState } from "react";
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
  useEffect(() => {
    const interval = setInterval(() => {
      changePage((cur) => (cur % 4) + 1);
    }, 2000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className={css.heroContainer}>
      <div className={css.leftText}>
        <h1>{content[page - 1]}</h1>
        <div className="myIcons">
          <FaCircle
            color={page == 1 ? "#3498db" : "#2c3e50"}
            key={1}
            onClick={() => {
              changePage(1);
            }}
          />
          <FaCircle
            color={page == 2 ? "#3498db" : "#2c3e50"}
            key={2}
            onClick={() => {
              changePage(2);
            }}
          />
          <FaCircle
            color={page == 3 ? "#3498db" : "#2c3e50"}
            key={3}
            onClick={() => {
              changePage(3);
            }}
          />
          <FaCircle
            color={page == 4 ? "#3498db" : "#2c3e50"}
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
