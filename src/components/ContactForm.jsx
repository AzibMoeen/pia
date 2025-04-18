import NewsletterSignup from './contact/NewsletterSignup';
import AppDownload from './contact/AppDownload';

const ContactForm = () => {
  return (
    <div className="w-full bg-gray-50 py-8 px-4 md:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <NewsletterSignup />
        <AppDownload />
      </div>
    </div>
  );
};

export default ContactForm;
