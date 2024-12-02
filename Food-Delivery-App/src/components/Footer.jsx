import { LiaInstagram } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white p-5 px-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
       
        <div className="w-full lg:w-1/4 text-center lg:text-left">
          <p className="font-bold mb-3">For better experience, download the Eat/Drink app now:</p>
          <div className="flex justify-center lg:justify-start gap-5">
            <IoLogoGooglePlaystore size={35} />
            <FaApple size={35} />
          </div>
          
          <div className="mt-5">
            <p className="font-bold">Social Links:</p>
            <div className="flex justify-center lg:justify-start gap-6 mt-3">
              <LiaInstagram size={37} />
              <FaFacebookF size={28} />
              <FaXTwitter size={30} />
              <FaLinkedin size={32} />
            </div>
          </div>
        </div>

        
        <div className="w-full lg:w-1/4 text-center lg:text-left">
          <p className="font-bold">Eat/<span className="text-[#f1c40f]">Drink</span></p>
          <p>© 2024 Eat/Drink Limited</p>
        </div>

        
        <div className="w-full lg:w-1/2 flex flex-wrap justify-between gap-10">
         
          <div>
            <p className="font-bold mb-2">Company</p>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Eat/Drink Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Eat/Drink One</li>
              <li>Eat/Drink Instamart</li>
              <li>Eat/Drink Dineout</li>
              <li>Eat/Drink Genie</li>
            </ul>
          </div>

         
          <div>
            <p className="font-bold mb-2">Contact us</p>
            <ul className="space-y-1">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>

         
          <div>
            <p className="font-bold mb-2">Life at Eat/Drink</p>
            <ul className="space-y-1">
              <li>Explore with Eat/Drink</li>
              <li>Eat/Drink News</li>
              <li>Snackables</li>
            </ul>
          </div>

        
          <div>
            <p className="font-bold mb-2">Available in:</p>
            <ul className="space-y-1">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
