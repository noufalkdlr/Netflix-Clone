import React from "react";

import './Footer.css';

import youtube_icon from '../../assets/youtube_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <img src={youtube_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={facebook_icon} alt="" />
                <img src={twitter_icon} alt="" />
            </div>
            <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>FAQs</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Sitemap</li>
                <li>Press</li>
                <li>Developers</li>
                <li>Affiliates</li>
            </ul>
            <p className="copyright-text">
                © {new Date().getFullYear()} Netflix. All rights reserved.
            </p>
        </div>
    )
}

export default Footer