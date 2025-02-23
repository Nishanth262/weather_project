# Weather App

A modern, responsive weather application built with React, TypeScript, and Tailwind CSS. Get real-time weather information for any location worldwide using the WeatherAPI service.

![Weather App Screenshot](https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1200&h=600)

## Features

- 🌍 Search weather by location name
- 🌡️ Real-time temperature data
- 💨 Wind speed information
- 🕒 Local time display
- 📱 Responsive design
- ⌨️ Keyboard navigation support
- 🎨 Modern UI with Tailwind CSS
- 🔍 Error handling and loading states

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons
- WeatherAPI

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. Enter a location name in the search box
2. Press Enter or click the "Get Weather" button
3. View the current weather information including:
   - Temperature in Celsius
   - Wind speed in kilometers per hour
   - Local time at the searched location

## API Key

The app uses [WeatherAPI](https://www.weatherapi.com/) for weather data. The API key is included in the code for demonstration purposes. In a production environment, you should:

1. Store the API key in an environment variable
2. Add `.env` to your `.gitignore` file
3. Create a `.env` file in the project root:
```
VITE_WEATHER_API_KEY=your_api_key_here
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [WeatherAPI](https://www.weatherapi.com/) for providing the weather data
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling system