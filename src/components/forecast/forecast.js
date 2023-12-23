import React from "react";
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// issue with slicing data - check source code repo, or look up issue

const Forecast = ({ data }) => {
  // Determines day of the week - pulled from system dates
  const currentDayInWeek = new Date().getDay();

  // slice target elements WEEK_DAYS[i=currentDayInWeek through i=0] and appends to end of WEEK_DAYS
  // e.g. Today is Wednesday: currentDayInWeek = 3: WEEK_DAYS becomes ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
  const daysToForecast = WEEK_DAYS.slice(
    currentDayInWeek,
    WEEK_DAYS.length
  ).concat(WEEK_DAYS.slice(0, currentDayInWeek));

  // Slicing data list and later mapping them to their idx.
  const slicedData = data.list.slice(0, 7);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {slicedData.map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{daysToForecast[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°F /{" "}
                    {Math.round(item.main.temp_max)}°F
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Cloudiness</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind Speed:</label>
                  <label>{Math.round(item.wind.speed)} mph</label>
                </div>
                {item.rain?.["3h"] !== undefined && (
                  <div className="daily-details-grid-item">
                    <label>Rainfall:</label>
                    <label>{item.rain["3h"]} mm</label>
                  </div>
                )}
                <div className="daily-details-grid-item">
                  <label>Feels Like:</label>
                  <label>{Math.round(item.main.feels_like)}°F</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
