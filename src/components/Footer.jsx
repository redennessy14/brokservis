import React from "react";
import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>Контакты</p>
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
