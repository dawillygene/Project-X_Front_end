// Footer.jsx
import { FaFacebookF, FaYoutube, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { useState } from 'react';
import content from '../../constants/FooterConstants';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted && email) {
      console.log('Newsletter subscription submitted:', { email });
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top links */}
        <div className="mb-10 border-b border-gray-200 pb-4">
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700 transition-colors">{content.topLinks[0]}</a>
            <a href="#" className="hover:text-gray-700 transition-colors">{content.topLinks[1]}</a>
            <a href="#" className="hover:text-gray-700 transition-colors">{content.topLinks[2]}</a>
            <a href="#" className="hover:text-gray-700 transition-colors">{content.topLinks[3]}</a>
          </div>
        </div>

        {/* Main columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* E-Shop column */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-2">{content.columns.eShop.title}</h3>
            <h4 className="text-gray-800 text-lg font-bold mb-6">{content.columns.eShop.subtitle}</h4>
            {content.columns.eShop.links.map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className="block text-gray-500 text-sm hover:text-gray-700 transition-colors mb-3"
              >
                {link}
              </a>
            ))}
            <div className="flex items-center mt-6 text-gray-500 text-sm">
              <TbWorld className="mr-2" />
              {content.columns.eShop.country}
            </div>
          </div>

          {/* Store column */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-2">{content.columns.store.title}</h3>
            <p className="text-gray-500 text-sm mb-3">{content.columns.store.address}</p>
            {content.columns.store.links.map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className="block text-gray-500 text-sm hover:text-gray-700 transition-colors mb-3"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Account column */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-2">{content.columns.account.title}</h3>
            {content.columns.account.links.map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className="block text-gray-500 text-sm hover:text-gray-700 transition-colors mb-3"
              >
                {link}
              </a>
            ))}
            <h3 className="text-gray-500 text-sm font-medium mt-6 mb-2">{content.columns.account.companyTitle}</h3>
            {content.columns.account.companyLinks.map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className="block text-gray-500 text-sm hover:text-gray-700 transition-colors mb-3"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Newsletter column */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium mb-2">{content.columns.newsletter.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{content.columns.newsletter.description}</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border rounded p-2 mb-3"
              />
              <div className="flex items-center mb-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-500">
                  {content.columns.newsletter.terms}
                </label>
              </div>
              <button
                type="submit"
                className="border rounded p-2 text-center uppercase font-bold hover:bg-gray-200 transition-colors"
                disabled={!termsAccepted || !email}
              >
                {content.columns.newsletter.button}
              </button>
            </form>

            <div className="mt-8">
              <p className="text-gray-500 text-sm mb-4">{content.columns.newsletter.socialText}</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaFacebookF size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaYoutube size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaPinterestP size={24} />
                </a>
              </div>
              <div className="flex gap-4 mt-2 text-xs text-gray-400">
                <span>Facebook</span>
                <span>YouTube</span>
                <span>Instagram</span>
                <span>Pinterest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;