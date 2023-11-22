import React from "react";
import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <LocationOnIcon />
        <span>КР г.Бишкек ул. Ибраимова 115 А офис 604</span>
      </div>
      <div className="contact-info">
        <EmailIcon />
        <span>brocservis@bk.ru</span>
      </div>
      <div className="contact-info">
        <PhoneIcon />
        <span>0220143709</span>
      </div>
    </footer>
  );
};

export default Footer;
