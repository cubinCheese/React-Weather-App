import "./current-location-time.css";

// converts 24hr to 12hr time format .
function convertTimeFormat(timeIn24) {
  const [hours, minutes] = timeIn24.split(":");         // Extract hours & minutes from input

  const hoursInt = parseInt(hours, 10);                 // Converts hours string to integer

  const period = hoursInt >= 12 ? "PM" : "AM";          // Determine whether it is AM or PM

  const hoursTo12 = hoursInt % 12 || 12;                // Convert to hours 12hr format

  const timeIn12 = `${hoursTo12}:${minutes} ${period}`; // Return as string

  return timeIn12;
}

function LocationTime({ data, weatherData }) {
  const dateTimeIn12 = convertTimeFormat(`${data.hour}:${data.minute}`);
  return (
    <div className="currLocation">
      <div className="lt-top">
        <img
          alt="weather"
          className="lt-weather-icon"
          src={`icons/${weatherData.weather[0].icon}.png`}
        />
        <div>
          <p className="dateTime">{dateTimeIn12}</p>
          <p className="day-of-week">{data.day_of_week}</p>
        </div>
      </div>
      <div className="lt-bottom">
        <div className="lt-parameter-row">
          <div className="lt-parameter-label ">{data.timezone}</div>
          <div className="lt-parameter-value ">{data.date}</div>
        </div>
      </div>
    </div>
  );
}

export default LocationTime;