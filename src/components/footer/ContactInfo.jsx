import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;