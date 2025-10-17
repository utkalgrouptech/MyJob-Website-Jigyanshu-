'use client';
import React, { useState } from 'react';

const PrivacyPolicy: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    // You can add logic to store the acceptance (e.g., in localStorage or backend)
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">Privacy Policy</h1>

        {/* Privacy Policy Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Our Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            Aenean ullamcorper est est, ac bibendum ipsum tincidunt vehicula. Nulla faucibus vulputate lorem, vitae
            placerat felis blandit ut. Nam sem quam, euismod sit amet augue et, mollis congue nisi.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vestibulum fringilla lobortis nunc ac tincidunt. Cras nec convallis quam. Maecenas non sem ut enim facilisis
            rhoncus. Sed odio ex, efficitur ac commodo sed, convallis vitae lectus. Aenean at urna ac tellus ullamcorper
            pretium. Aliquam erat volutpat.
          </p>
        </div>

        {/* Collect Information Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Collect Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Donec ac pulvinar diam, ac mollis augue. Etiam interdum fringilla magna, at placerat libero malesuada sed.
            Proin tincidunt a sapien at facilisis. Cras nec lectus pretium, convallis tellus eu, placerat augue.
          </p>
        </div>

        {/* Usage of Information Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Usage of Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Phasellus commodo venenatis erat, et vestibulum mi fringilla in. Proin elit urna, condimentum ut elit id,
            imperdiet rutrum orci. Praesent vehicula velit at est rutrum lacinia. Nullam accumsan at tortor in ullamcorper.
          </p>
        </div>

        {/* Security of User Data Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Security of User Data</h2>
          <p className="text-gray-700 leading-relaxed">
            Integer justo neque imperdiet vitae consequat in vehicula quis dolor orbi lorem leo volutpat a tristique.
          </p>
          <ul className="list-decimal list-inside text-gray-700 leading-relaxed">
            <li>Ut scelerisque hendrerit venenatis</li>
            <li>Proin fermentum lacus nec augue blandit placerat</li>
            <li>Ut vestibulum elit justo suscipit sem ultricies</li>
            <li>Integer fermentum vitae magna in condimentum</li>
            <li>Aenean ultrices neque id pellentesque tincidunt</li>
          </ul>
        </div>

        {/* Copyright and Security Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Copyright and Security</h2>
          <p className="text-gray-700 leading-relaxed">
            Vestibulum bibendum metus quis purus sagittis ultricies. Vestibulum fringilla urna volutpat eros pharetra
            consectetur. Integer rutrum eu odio et pulvinar. Sed hendrerit pellentesque faucibus. In venenatis lacus sit
            amet vehicula efficitur.
          </p>
        </div>

        {/* Accept Terms Section */}
        <div className="text-center">
          <button
            onClick={handleAccept}
            className={`px-8 py-3 font-bold rounded-lg text-white ${accepted ? 'bg-green-500' : 'bg-blue-600'} hover:bg-blue-700 transition duration-200`}
          >
            {accepted ? 'Accepted' : 'Accept Privacy Policy'}
          </button>
          <p className="mt-4 text-gray-500">
            By accepting, you agree to our <span className="text-blue-600">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
