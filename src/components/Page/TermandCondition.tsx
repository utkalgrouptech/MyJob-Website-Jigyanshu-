'use client';
import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          Terms and Conditions
        </h1>

        {/* Our Performance */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Our Performance</h2>
          <p className="text-gray-700 leading-relaxed">
            Sed ac sollicitudin ipsum. Vivamus vulputate, enim sit amet aliquet lacinia, ex mauris aliquam elit, vel
            pharetra augue arcu ultricies magna. Suspendisse justo erat, dignissim ut imperdiet ut, convallis vitae
            urna. Vivamus tincidunt lacinia metus sed suscipit.
          </p>
        </div>

        {/* Cookie */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Cookie</h2>
          <p className="text-gray-700 leading-relaxed">
            Pellentesque sit amet nulla facilisis, lobortis ex at, consequat diam. Pellentesque sed dui lorem. Aliquam
            vel euismod nunc. Nulla facilisi. Donec consectetur faucibus rutrum. Pellentesque ac ultricies sapien, ac
            iaculis erat.
          </p>
        </div>

        {/* Payments */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Payments</h2>
          <p className="text-gray-700 leading-relaxed">
            Amet nulla facilisis, lobortis ex at, consequat diam. Pellentesque sed dui lorem. Aliquam vel euismod nunc.
            Nulla facilisi. Donec consectetur faucibus rutrum.
          </p>
        </div>

        {/* Refund Policy */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Refund Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            Donec ut vestibulum sem, in faucibus mauris. Nulla et luctus nulla. Vestibulum consectetur nisi nec lobortis
            pretium. Fusce dignissim in sem in bibendum.
          </p>
        </div>

        {/* Hyperlinking */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Hyperlinking to Our Content</h2>
          <ul className="list-decimal list-inside text-gray-700 leading-relaxed">
            <li>Ut scelerisque hendrerit venenatis</li>
            <li>Proin fermentum lacus nec augue blandit placerat</li>
            <li>Ut vestibulum elit justo suscipit sem ultricies</li>
            <li>Integer fermentum vitae magna in condimentum</li>
            <li>Aenean ultrices neque id pellentesque tincidunt</li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed">
            Donec facilisis consequat nisi. Vivamus euismod at ipsum a gravida. Quisque vitae augue maximus elit iaculis
            tincidunt. Curabitur vel enim eget velit tincidunt viverra eu in risus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
