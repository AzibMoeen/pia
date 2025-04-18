import { FaCalendarAlt } from "react-icons/fa";

const DateInput = ({ label, value, onChange, disabled }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 ${
          disabled ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <FaCalendarAlt className="text-gray-400" />
      </div>
    </div>
  </div>
);

export default DateInput;