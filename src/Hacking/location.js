import React, { useEffect, useState } from "react";

const LocationComponent = () => {
  const [locationData, setLocationData] = useState(null);
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    getLocation();
    fetchIpData();
  }, []);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setLocationData("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    const { latitude, longitude, timestamp, ...rest } = position.coords;
    setLocationData({ latitude, longitude, timestamp: new Date(timestamp).toString() });
  };

  const showError = (error) => {
    setLocationData(`Error: ${error.message}`);
  };

  const fetchIpData = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIpData(data);
    } catch (error) {
      setIpData("Failed to fetch IP address.");
    }
  };

  const getOperatingSystem = () => {
    const { userAgent } = window.navigator;
    const osRegex = /(\bWindows\b|\bMac OS\b|\bLinux\b)/i;
    const osMatch = userAgent.match(osRegex);
    return osMatch ? osMatch[0] : "Unknown";
  };

  const getBrowserInfo = () => {
    const { userAgent } = window.navigator;
    const browserRegex = /(Chrome|Firefox|Edge|Safari|Opera|IE|Trident)/i;
    const browserMatch = userAgent.match(browserRegex);
    return browserMatch ? browserMatch[0] : "Unknown";
  };

  const { latitude, longitude, timestamp } = locationData || {};

  return (
    <div>
      <div>
        <h3>Location Data:</h3>
        {latitude && <p>Latitude: {latitude}</p>}
        {longitude && <p>Longitude: {longitude}</p>}
        {latitude && longitude && (
          <iframe
            title="Final Location"
            width="600"
            height="450"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.4726904955385!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE2JzU2LjgiTiAzNcKwMzEnMTQuMyJF!5e0!3m2!1sen!2sin!4v1627854170249!5m2!1sen!2sin`}
          ></iframe>
        )}
        {timestamp && <p>Timestamp: {timestamp}</p>}
        {!latitude && !longitude && !timestamp && <p>Loading location data...</p>}
      </div>

      <div>
        <h3>User System Information:</h3>
        <p>Operating System: {getOperatingSystem()}</p>
        <p>Browser: {getBrowserInfo()}</p>
      </div>

      <div>
        <h3>IP Data:</h3>
        {ipData ? <p>IP Address: {ipData.ip}</p> : <p>Loading IP address...</p>}
      </div>
    </div>
  );
};

export default LocationComponent;
