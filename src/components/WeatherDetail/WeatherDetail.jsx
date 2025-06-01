import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import WeatherInfo from './WeatherInfo';
import WeatherStats from './WeatherStats';
import { WEATHER_CARD_COLORS } from '../../utils/constants';

const WeatherDetail = ({ city, cityIndex, onBackClick }) => {
  if (!city) return null;

  // Get the same color as used in the dashboard card
  const cardColor = WEATHER_CARD_COLORS[cityIndex % WEATHER_CARD_COLORS.length];

  return (
    <div className="min-h-screen bg-blue-950 text-white">
      <Header showSearch={false} />

      {/* Weather Detail Card */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gradient-to-br rounded-2xl overflow-hidden">
          {/* Top Section - Use the same gradient color */}
          <div className={`p-8 relative bg-gradient-to-br ${cardColor}`}>
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