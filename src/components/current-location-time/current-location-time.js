import "./current-location-time.css";


function LocationTime({ data }) {
    return (
      <div className="currLocation">
        <p>City: {data.city}</p>
        <p>Timezone: {data.timezone}</p>
        <p>Date and Time: {data.datetime}</p>
      </div>
    );
  }

export default LocationTime;
