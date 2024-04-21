import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import Vector from "../img/Vector.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import footerBg from "../img/footerBg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#219653] inPhone py-20">
      <div className="flex justify-center items-center">
        <div className="flex-1 border-r-2 border-black-600">
          <div
            className="flex justify-center items-center mx-8 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} className="footerLogo" alt="" />
            <div className="ml-4">
              <h3 className="text-2xl text-white font-bold mt-4">AgroVision</h3>
              <p className="text-md font-normal text-white mt-2">
                WeAreFarmerVoice
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-16 border-r-2 border-black-600">
          <div className="flex">
            <ul className="list-none mr-24">
              <li
                className="text-lg text-white font-bold "
               
              >
                Home
              </li>
              {/* <li className='text-lg text-white font-medium cursor-pointer'>Menu</li> */}
              <li
                className="text-lg text-white font-medium cursor-pointer my-1"
                onClick={() => navigate("/sms")}
              >
                SMS Service
              </li>
              <li
                className="text-lg text-white font-medium cursor-pointer my-1"
                onClick={() => navigate("/sms")}
              >
                Call Service
              </li>
              <li
                className="text-lg text-white font-medium cursor-pointer my-1"
                onClick={() => navigate("/sms")}
              >
                Chat Bot
                </li>
              <li
                className="text-lg text-white font-medium cursor-pointer my-1"
                onClick={() => navigate("/sms")}
              >
               Helpdesk
              </li>
            </ul>
            <ul>
            <li
                className="text-lg text-white font-bold"
                
              >
                Our Services
                </li>
              <li
                className="text-lg text-white font-medium cursor-pointer my-1"
                onClick={() => navigate("/fertilizer")}
              >
                Fertilizer Prediction
              </li>
              <li
                className="text-lg text-white font-medium cursor-pointer my-1"
                onClick={() => navigate("/crop")}
              >
                Crop Prediction
              </li>
              <li
                className="text-lg text-white font-medium cursor-pointer my-1"
                
              >
                Weather Prediction
              </li>
              <li
                className="text-lg text-white font-medium cursor-pointer my-1"
                onClick={() => navigate("/disease")}
              >
                Disease Prediction
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 px-16 border-r-2 border-black-600">
          <h1 className="text-xl ml-6 text-white font-bold w-2/3">
            Give us a follow on social media
          </h1>
          <div className="flex my-5 justify-left">
            <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector}
              alt=""
            />
            <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector1}
              alt=""
            />
            <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector2}
              alt=""
            />
          </div>
          <p className="text-lg ml-6 text-white">
            Made by : <strong>Team SpidyHack</strong>
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
