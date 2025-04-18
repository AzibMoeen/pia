import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({ label, value, isOpen, setIsOpen, options, onChange }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 text-left"
      >
        {value}
      </button>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <FaChevronDown className="text-gray-400" />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 p-2">
          <div className="space-y-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default Dropdown;