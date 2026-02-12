import { FiZap, FiAward, FiTrendingUp, FiShield } from "react-icons/fi";
import { HeroSection } from "./HeroStyles";
import type { IHeroProps } from "./Hero.interface";

export default function Hero({}: IHeroProps) {
  return (
    <HeroSection>
      <div className="hero_content">
        <h1>Meet Ngozi — curated gear for bold lifestyles.</h1>
        <p>
          Explore hot sales, best sellers, and popular picks. Every product
          includes instant WhatsApp checkout so you can purchase in seconds.
        </p>
        <div className="hero_actions">
          <a href="#categories" className="primary_btn">
            Shop Collections
          </a>
          <a href="#contact" className="ghost_btn">
            Talk to Sales
          </a>
        </div>
      </div>
      <div className="hero_visual">
        <div>
          <FiZap size={22} /> Instant buy in WhatsApp
        </div>
        <div className="metric_row">
          <div className="metric_card">
            <div className="metric_value">40+</div>
            <div className="metric_label">Curated products</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">4.9/5</div>
            <div className="metric_label">Customer love</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">24h</div>
            <div className="metric_label">Fast response</div>
          </div>
        </div>
        <div className="metric_row">
          <div className="metric_card">
            <div className="metric_value">
              <FiAward /> Trusted
            </div>
            <div className="metric_label">Top-rated store</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">
              <FiTrendingUp /> Trending
            </div>
            <div className="metric_label">Weekly drops</div>
          </div>
          <div className="metric_card">
            <div className="metric_value">
              <FiShield /> Secure
            </div>
            <div className="metric_label">Verified vendors</div>
          </div>
        </div>
      </div>
    </HeroSection>
  );
}
