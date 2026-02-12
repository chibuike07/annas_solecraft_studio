import { FiStar, FiTruck, FiShield } from "react-icons/fi";
import { FooterSection } from "./FooterStyles";
import type { IFooterProps } from "./Footer.interface";

export default function Footer({}: IFooterProps) {
  return (
    <FooterSection id="contact">
      <div className="footer_icons">
        <FiStar /> Premium picks · <FiTruck /> Fast delivery · <FiShield />
        Secure checkout
      </div>
      <div className="footer_note">
        Secure shopping experience with encrypted WhatsApp communication.
      </div>
    </FooterSection>
  );
}
