import React from "react";
import logo from "../../assets/logo.webp";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const FooterComponent = () => {
  const events = [
    { name: "TeknoFest 2024", link: "https://www.teknofestpakistan.com/" },
  ];

  const developers = [
    { name: "Sameer Ahmed", link: "https://www.linkedin.com/in/sameer-vers3/" },
    { name: "Owais Rafiq", link: "https://www.linkedin.com/in/owais-rafiq-639494253/" },
    { name: "Ali Nazir", link: "https://www.linkedin.com/in/ali-nazir-74b909275/" },
    { name: "Muhammad Anas", link: "https://www.linkedin.com/in/muhammad-anas/" },
  ];

  const socialLinks = [
    { name: <FaInstagram />, link: "https://www.instagram.com/acmnuceskhi/" },
    { name: <FaLinkedin />, link: "https://www.linkedin.com/company/acmnuceskhi" },
    { name: <FaFacebook />, link: "https://www.facebook.com/acmnuceskhi/" },
  ];

  const renderList = (items) =>
    items.map((item, index) => (
      <li key={index} className="mb-4">
        <a href={item.link} className="hover:underline text-white">
          {item.name}
        </a>
      </li>
    ));

  return (
    <div className="bg-black">
      <footer className="bg-repeat shadow-lg shadow-black sm:pl-20">
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 ml-9">
              <a href="https://www.acmdevday.com" className="flex items-center md:flex md:justify-center">
                <img className="mx-auto md:mx-0" src={logo} width={"250vw"} alt="Logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-3 mt-9 mr-9">
              <div>
                <h2 className="mb-6 text-lg font-bold text-white uppercase">Our Events</h2>
                <ul className="text-white font-medium text-lg">
                  {renderList(events)}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-bold text-white uppercase">Meet the Developers</h2>
                <ul className="text-white font-medium text-lg">
                  {renderList(developers)}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white uppercase sm:ml-4">Connect with Us</h2>
                <div className="flex flex-wrap mt-4 items-left justify-left">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.link} className="text-white mx-1 lg:mx-4 text-xl sm:text-2xl hover:text-gray-100 transition-colors">
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 h-0.5 mt-8 mb-3"></div>
          <h2 className="text-sm text-center text-white">
            © {new Date().getFullYear()}{" "}
              ACM NUCES™
            . All Rights Reserved.
          </h2>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;