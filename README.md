# 🌦 Weather Information Application

A secure and responsive Weather Information Web/API Application that retrieves and displays real-time weather data from [OpenWeatherMap](https://openweathermap.org/api), with integrated authentication and authorization mechanisms using [Auth0](https://auth0.com/).

## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS, Lucide React Icons
- **Authentication:** Auth0 (with Multi-Factor Authentication)
- **Weather API:** OpenWeatherMap

## Setup Instructions

### 1. Clone or Download the Project Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

Open the project in Visual Studio Code or your preferred editor.

### 2. Environment Configuration

Create a `.env` file in the root directory and add the following:

```bash
# OpenWeatherMap API Key 
VITE_OPENWEATHER_API_KEY=API_KEY_HERE

# Auth0 Credentials
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

## Features

### 🌥 Weather Dashboard

- **Fetch Weather:** Retrieve weather data from OpenWeatherMap for multiple cities
- **Display Information:** Show city name, current conditions, temperature, and detailed weather view
- **Modern UI:** Includes animated loader and weather icons for an enhanced user experience

### 💾 Data Caching

- Weather data is cached for 5 minutes to reduce redundant requests and improve performance

### 🔒 Authentication & Authorization

- **Secure Login & Logout:** Integrated with Auth0 Authentication
- **Multi-Factor Authentication (MFA):** Enabled via One-Time Passcode and Email
- **Restricted Access:** Public sign-ups disabled — only pre-registered users (configured via Auth0) can access the application
- **Test Account:** A test account is provided for assignment/demo use

## Configuration

Make sure to replace the placeholder values in your `.env` file with your actual API credentials:

- Get your OpenWeatherMap API key from [OpenWeatherMap API](https://openweathermap.org/api)
- Configure your Auth0 application in the [Auth0 Dashboard](https://manage.auth0.com/)

