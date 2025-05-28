import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "eidelgohary.job@gmail.com",
      color: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+2 01124956060",
      color: "from-green-500/20 to-green-600/10",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "giza, Egypt",
      color: "from-purple-500/20 to-purple-600/10",
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: "GitHub", url: "https://github.com/Eid-Elgohary" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "https://linkedin.com/in/eid-elgohary" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${info.color} border-purple-700/30 hover:border-purple-500/50 transition-all duration-300`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-purple-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-purple-600 text-lg font-semibold mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-sm">{info.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-700/30">
            <CardContent className="p-8">
              <h3 className="text-white text-2xl font-bold mb-6">
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-purple-900/20 border-purple-700/50 text-gray-800 placeholder-gray-900 focus:border-purple-500 focus:outline-none "
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-purple-900/20 border-purple-700/50 text-gray-800 placeholder-gray-400 focus:border-purple-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-purple-900/20 border-purple-700/50 text-gray-800  placeholder-gray-400 focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-3 py-2 bg-purple-900/20 border border-purple-700/50 rounded-md text-gray-800 placeholder-gray-400 focus:border-purple-500 focus:outline-none resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-700/30">
              <CardContent className="p-8">
                <h3 className=" text-2xl font-bold mb-4">
                  Let's Work Together
                </h3>
                <p className="text-gray-100 mb-6">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you're a startup looking to build your MVP
                  or an established company needing a fresh perspective, let's
                  discuss how we can work together.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-purple-600/30 hover:bg-purple-800/50 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 border-purple-700/30">
              <CardContent className="p-8">
                <h3 className=" text-xl font-bold mb-4">
                  Quick Response
                </h3>
                <p className="text-gray-100 text-sm mb-4">
                  I typically respond to messages within 24 hours. For urgent
                  matters, feel free to reach out via phone or email directly.
                </p>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
