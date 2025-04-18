import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { departureOptions } from "../../data";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with:", { email, city });
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/Images/Right.jpg')" }}
      />

      <div className="relative z-10 p-6 md:p-10 bg-black/20 h-full flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Get the latest sales straight to your inbox.
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                E-mail Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@xyz.com"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-white mb-2">
                Preferred City of Departure
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-left flex justify-between items-center"
                >
                  <span>{city || "Select"}</span>
                  <FaChevronDown className="text-gray-400" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 py-1 max-h-60 overflow-auto">
                    {departureOptions.map((cityOption) => (
                      <button
                        key={cityOption}
                        type="button"
                        onClick={() => {
                          setCity(cityOption);
                          setIsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        {cityOption}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded transition-colors"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;