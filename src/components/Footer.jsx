import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto space-y-8">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-green-800">
            <MdLocationOn size={24} />
            <p className="text-sm font-medium">
              PIA Building, Jinnah International Airport, Karachi, 75200, Pakistan.
            </p>
          </div>
          <div className="flex items-center gap-2 text-green-800">
            <MdPhone size={20} />
            <span>(+92-21)-111-786-786</span>
          </div>
          <div className="flex items-center gap-2 text-green-800">
            <MdEmail size={20} />
            <span>contact@piac.aero</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 text-white">
          <span className="bg-green-800 p-2 rounded-full"><FaFacebookF /></span>
          <span className="bg-green-800 p-2 rounded-full"><FaXTwitter /></span>
          <span className="bg-green-800 p-2 rounded-full"><FaInstagram /></span>
          <span className="bg-green-800 p-2 rounded-full"><FaLinkedinIn /></span>
          <span className="bg-green-800 p-2 rounded-full"><FaYoutube /></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-green-600">About Us</Link></li>
              <li><Link to="#" className="hover:text-green-600">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-green-600">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-green-600">Passengers Rights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-green-600">Flight Schedule</Link></li>
              <li><Link to="#" className="hover:text-green-600">Cargo Services</Link></li>
              <li><Link to="#" className="hover:text-green-600">Engineering Services</Link></li>
              <li><Link to="#" className="hover:text-green-600">Ground Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Travel Information</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-green-600">Flight Status</Link></li>
              <li><Link to="#" className="hover:text-green-600">Travel Requirements</Link></li>
              <li><Link to="#" className="hover:text-green-600">Travel Insurance</Link></li>
              <li><Link to="#" className="hover:text-green-600">Baggage Information</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-green-600">Customer Support</Link></li>
              <li><Link to="#" className="hover:text-green-600">Feedback</Link></li>
              <li><Link to="#" className="hover:text-green-600">Careers</Link></li>
              <li><Link to="#" className="hover:text-green-600">Media Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link to="#" className="hover:text-green-600">
              <img src="/Images/appstore.png" alt="App Store" className="h-10" />
            </Link>
            <Link to="#" className="hover:text-green-600">
              <img src="/Images/googleplay.png" alt="Google Play" className="h-10" />
            </Link>
          </div>
        </div>

        <div className="text-center text-green-800 text-sm border-t pt-4">
          © 2024. Pakistan International Airlines. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
