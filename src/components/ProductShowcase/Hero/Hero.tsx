import { FiZap, FiAward, FiTrendingUp, FiShield } from "react-icons/fi";
import { HeroSection } from "./HeroStyles";
import type { IHeroProps } from "./Hero.interface";

export default function Hero({}: IHeroProps) {
  return (
    <HeroSection>
      <div className="hero_content">
        <h1>Welcome to Ann's Kitchen — Authentic Nigerian Igbo Cuisine.</h1>
        <p>
          Experience traditional Igbo delicacies prepared with love and authentic ingredients. 
          Order your favorite soups, fufu, and delicacies with instant WhatsApp checkout.
        </p>
        <div className="hero_actions">
          <a href="#categories" className="primary_btn">
            Order Now
          </a>
          <a href="#contact" className="ghost_btn">
            Contact Us
          </a>
        </div>
      </div>
      <div className="hero_visual">
        <div>
          <FiZap size={22} /> Order via WhatsApp instantly
        </div>
        <div className="metric_row">
          <div className="metric_card">
            <div className="metric_value">24+</div>
            <div className="metric_label">Delicious dishes</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">4.9/5</div>
            <div className="metric_label">Customer ratings</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">2h</div>
            <div className="metric_label">Fast delivery</div>
          </div>
        </div>
        <div className="metric_row">
          <div className="metric_card">
            <div className="metric_value">
              <FiAward /> Fresh
            </div>
            <div className="metric_label">Daily ingredients</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">
              <FiTrendingUp /> Popular
            </div>
            <div className="metric_label">Top dishes</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">
              <FiShield /> Hygienic
            </div>
            <div className="metric_label">Clean kitchen</div>
          </div>
        </div>
      </div>
    </HeroSection>
  );
}
