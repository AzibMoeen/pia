import { Link } from 'react-router-dom';

const FooterLinksSection = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.url} className="hover:text-green-600">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterLinks = () => {
  const sections = [
    {
      title: "Information",
      links: [
        { text: "About Us", url: "#" },
        { text: "Terms & Conditions", url: "#" },
        { text: "Privacy Policy", url: "#" },
        { text: "Passengers Rights", url: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Flight Schedule", url: "#" },
        { text: "Cargo Services", url: "#" },
        { text: "Engineering Services", url: "#" },
        { text: "Ground Services", url: "#" },
      ],
    },
    {
      title: "Travel Information",
      links: [
        { text: "Flight Status", url: "#" },
        { text: "Travel Requirements", url: "#" },
        { text: "Travel Insurance", url: "#" },
        { text: "Baggage Information", url: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { text: "Customer Support", url: "#" },
        { text: "Feedback", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Media Center", url: "#" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {sections.map((section, index) => (
        <FooterLinksSection key={index} {...section} />
      ))}
    </div>
  );
};

export default FooterLinks;