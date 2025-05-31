import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import WeatherInfo from './WeatherInfo';
import WeatherStats from './WeatherStats';

const WeatherDetail = ({ city, onBackClick }) => {
  if (!city) return null;

  return (
    <div className="min-h-screen bg-blue-950 text-white">
      <Header showSearch={false} />

      {/* Weather Detail Card */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
          {/* Top Section */}
          <div className="p-8 relative">
            {/* Back Button */}
            <button 
              onClick={onBackClick}
              className="absolute top-6 left-6 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <WeatherInfo city={city} />
          </div>

          {/* Bottom Section - Details */}
          <WeatherStats city={city} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WeatherDetail;