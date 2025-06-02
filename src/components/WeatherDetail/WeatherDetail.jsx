import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import WeatherInfo from './WeatherInfo';
import WeatherStats from './WeatherStats';
import { WEATHER_CARD_COLORS } from '../../utils/constants';

// Expanded view weather card structure

const WeatherDetail = ({ city, cityIndex, onBackClick }) => {
  if (!city) return null;

  // Get the same color as used in the dashboard card
  const cardColor = WEATHER_CARD_COLORS[cityIndex % WEATHER_CARD_COLORS.length];

  return (
    <div className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/Main.png')" }}>
      <Header showSearch={false} />

      {/* Weather Detail Card */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gradient-to-br rounded-2xl overflow-hidden">
          {/* Top Section - Use the same gradient color */}
          <div className={`p-8 relative bg-gradient-to-br ${cardColor}`}>
            {/* Back Button */}
            <button 
              onClick={onBackClick}
              className="absolute top-4 left-4 group
                       bg-white/10 hover:bg-white/20 
                       backdrop-blur-sm rounded-full 
                       p-3 transition-all duration-300 ease-out
                       hover:scale-110 hover:shadow-lg
                       active:scale-95 active:bg-white/30
                       border border-white/20 hover:border-white/40
                       focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Go back to weather list"
            >
              <ArrowLeft className="w-6 h-6 text-white group-hover:text-white 
                                  transition-all duration-300 ease-out
                                  group-hover:-translate-x-0.5" />
              
              {/* Hover tooltip */}
              <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2
                             bg-gray-900 text-white text-sm px-2 py-1 rounded
                             opacity-0 group-hover:opacity-100 transition-opacity duration-200
                             pointer-events-none whitespace-nowrap z-10
                             after:content-[''] after:absolute after:right-full after:top-1/2 
                             after:-translate-y-1/2 after:border-4 after:border-transparent 
                             after:border-r-gray-900">
                Back to cities
              </span>
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