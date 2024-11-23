import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-bl text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg text-burgundy font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Vishal Bharti Senior Secondary School</p>
            <p className="text-sm">1234 School Lane, City, Country</p>
            <p className="text-sm">Email: info@vishalbhartischool.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>

          {/* Social Media Links */}
          <div className="flex  space-x-6 justify-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bl">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bl">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bl">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bl">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-burgundy text-sm font-semibold">© 2024 Vishal Bharti School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
