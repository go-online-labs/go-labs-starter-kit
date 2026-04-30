import {
  Linkedin,
  Instagram,
  Mail,
  
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom"
import logoImage from "@/assets/logo-transparent.png";
import { EXTERNAL_LINKS } from "@/config/externalLinks"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const socialLinks = [
    {
      label: "LinkedIn",
      href: EXTERNAL_LINKS.linkedinCompany,
      Icon: Linkedin,
    },
    {
      label: "Instagram",
      href: EXTERNAL_LINKS.instagram,
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
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contract Programming
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className="hover:text-white transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className="hover:text-white transition-colors"
                >
                  SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className="hover:text-white transition-colors"
                >
                  Social Media Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#our-team"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("our-team")
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#our-team"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("our-team")
                  }}
                  className="hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.linkedinCompany}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Careers
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
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
