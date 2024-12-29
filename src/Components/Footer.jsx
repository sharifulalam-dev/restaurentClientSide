import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Contact Section */}
        <div className="bg-[#1f2937] w-full md:w-1/2 text-white p-4">
          <div className="max-w-7xl mx-auto">
            <h4 className="text-lg font-semibold mb-3">CONTACT US</h4>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        {/* Follow Us Section */}
        <div className="bg-[#111827] w-full md:w-1/2 text-white p-4">
          <h4 className="text-lg font-semibold mb-3">Follow US</h4>
          <p className="mb-3">Join us on social media</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-300 hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-300 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-300 hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black text-center py-4">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
