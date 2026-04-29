import {
  Linkedin,
  Instagram,
  Mail,
  
  MapPin,
} from "lucide-react";
import logoImage from "@/assets/logo-transparent.png";

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/getuslive/",
      Icon: Linkedin,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/getuslive/",
      Icon: Instagram,
    },
  ]

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded flex items-center justify-center">
                <img
                  src={logoImage}
                  className="w-12 rounded text-primary-foreground [padding:0_0_5px_10px]"
                />
              </div>
              <span className="text-xl font-bold">Get Us Live</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through innovative digital solutions and
              performance-driven marketing strategies.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Get Us Live on ${label}`}
                    className="inline-flex"
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contract Programming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Social Media Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@getuslive.com?subject=Inquiry about">
                  contact@getuslive.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Canada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} GetUsLive Solutions Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
