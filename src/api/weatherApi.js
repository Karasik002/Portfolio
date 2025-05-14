const API_KEY = "e0ae750e7b717f3252419ccc38fbb89a";
const CITY = "Korosten";
const COUNTRY = "UA";

export const fetchWeatherData = async () => {
  try {
    if (!API_KEY || API_KEY === "YOUR_OPENWEATHER_API_KEY") {
      throw new Error("API-ключ не налаштовано. Вставте дійсний ключ.");
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}&units=metric&lang=uk`
    );

    if (!response.ok) {
      throw new Error(`Помилка запиту: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (data.cod !== 200) {
      throw new Error(data.message || "Не вдалося отримати дані про погоду");
    }

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};