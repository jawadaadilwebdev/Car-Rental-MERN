
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
const footerLinks = [
  {
    title: "QUICK LINKS",
    links: [
      { name: "Home", href: "#" },
      { name: "Browse Cars", href: "#" },
      { name: "List Your Car", href: "#" },
      { name: "About Us", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Insurance", href: "#" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { name: "i8 Markaz", href: "#" },
      { name: "Islamabad, Pakistan", href: "#" },
      { name: "Phone: +92 51 1234567", href: "#" },
      { name: "Email: info@yourwebsite.com", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col items-start justify-between gap-10 border-b border-gray-500/30 py-10 text-gray-500 md:flex-row">
        
        {/* Logo and Description */}
        <div>
          <Link to='/'>
        <img alt="Logo" src={assets.logo} className='h-8 cursor-pointer'/>
        </Link>

          <p className="mt-6 max-w-102.5">
            Find the perfect car for every journey. Enjoy reliable vehicles, easy booking, and a smooth rental experience wherever the road takes you.
          </p>
          {/* Social Links */}
<div className="mt-5 flex items-center gap-4">
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <img
      src={assets.facebook_logo}
      alt="Facebook"
      className="h-6 w-6 cursor-pointer transition hover:scale-110"
    />
  </a>

  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <img
      src={assets.instagram_logo}
      alt="Instagram"
      className="h-6 w-6 cursor-pointer transition hover:scale-110"
    />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <img
      src={assets.twitter_logo}
      alt="Twitter"
      className="h-6 w-6 cursor-pointer transition hover:scale-110"
    />
  </a>

  <a href="mailto:your-email@example.com">
    <img
      src={assets.gmail_logo}
      alt="Email"
      className="h-6 w-6 cursor-pointer transition hover:scale-110"
    />
  </a>
</div>
        </div>

        {/* Footer Links */}
        <div className="flex w-full flex-wrap justify-between gap-8 md:w-[45%]">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-2 text-base font-semibold text-gray-900 md:mb-5">
                {section.title}
              </h3>

              <ul className="space-y-1 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="transition hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className='flex flex-col md:flex-row text-gray-500 gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="#">Jawad Aadil Web dev</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
    </footer>
  );
};

export default Footer;



