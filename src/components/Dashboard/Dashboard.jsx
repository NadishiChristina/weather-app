import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import WeatherCard from './WeatherCard';

const Dashboard = ({ weatherData, onCityClick }) => {
  return (
    <div className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/Main.png')" }}>
        
      <Header showSearch={true} />
      
      {/* Weather Cards Grid */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {weatherData.map((city, index) => (
            <WeatherCard
              key={city.id}
              city={city}
              index={index}
              onClick={() => onCityClick(city, index)} // Pass both city and index
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
