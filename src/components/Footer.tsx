
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: "GitHub", url: "#" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "#" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "#" },
    { icon: <Mail className="w-5 h-5" />, name: "Email", url: "mailto:ibrahim.manion@example.com" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-purple-950/50 border-t border-purple-700/30 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">Ibrahim Manion</h3>
            <p className="text-gray-300 text-sm">
              Software Engineer passionate about creating beautiful and functional 
              digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Work', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-purple-700/30 hover:bg-purple-600/50 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              Available for freelance opportunities
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-700/30 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-1 text-gray-300 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>by Ibrahim Manion</span>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
