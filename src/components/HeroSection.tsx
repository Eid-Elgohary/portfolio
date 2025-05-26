
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="mb-8">
          <span className="text-purple-300 text-lg">Hello! I Am </span>
          <span className="text-purple-400 font-semibold text-lg">Ibrahim Manion</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          {/* Avatar */}
          <div className="relative">
            <div className="w-48 h-48 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 p-1 animate-float">
              <div className="w-full h-full rounded-3xl bg-gray-200 flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-600 rounded-2xl flex items-center justify-center">
                  <div className="w-20 h-14 bg-gray-400 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-left lg:max-w-lg">
            <p className="text-white text-lg mb-2">A Designer who</p>
            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">
              Judges a book
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              by its{' '}
              <span className="text-purple-400 underline decoration-purple-400">
                cover
              </span>
              <span className="text-white">...</span>
            </h2>
            <p className="text-gray-300 text-sm">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>

        {/* Professional Title */}
        <div className="text-center">
          <h3 className="text-white text-3xl lg:text-4xl font-bold mb-4">
            I'm a Software Engineer.|
          </h3>
          <p className="text-gray-300 text-lg">
            Currently, I'm a Software Engineer at{' '}
            <span className="text-blue-400">📘 Facebook</span>,
          </p>
        </div>

        {/* Description */}
        <div className="mt-12 max-w-2xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed">
            A self-taught UI/UX designer, functioning in the industry for 3+ years now.
            I make meaningful and delightful digital products that create an equilibrium
            between user needs and business goals.
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
