import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">

        <a href="https://www.instagram.com" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2024 romapizza.com</p>
    </div>
  );
}

export default Footer;
