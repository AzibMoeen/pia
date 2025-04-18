import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4 text-white">
      <span className="bg-green-800 p-2 rounded-full"><FaFacebookF /></span>
      <span className="bg-green-800 p-2 rounded-full"><FaXTwitter /></span>
      <span className="bg-green-800 p-2 rounded-full"><FaInstagram /></span>
      <span className="bg-green-800 p-2 rounded-full"><FaLinkedinIn /></span>
      <span className="bg-green-800 p-2 rounded-full"><FaYoutube /></span>
    </div>
  );
};

export default SocialLinks;