import { Link } from 'react-router-dom';

const AppDownload = () => {
  return (
    <div className="bg-green-100 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 md:p-10 h-full flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Check out our mobile app
          </h2>

          <div className="flex flex-col space-y-4">
            <Link to="#" className="block w-40" aria-label="Download on the App Store">
              <img src="/Images/appstore.png" alt="Download on the App Store" className="w-full" />
            </Link>

            <Link to="#" className="block w-40" aria-label="Get it on Google Play">
              <img src="/Images/googleplay.png" alt="Get it on Google Play" className="w-full" />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-auto flex justify-center">
          <img src="/Images/iphone.png" alt="Mobile app interface" className="max-w-full md:max-h-80" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;