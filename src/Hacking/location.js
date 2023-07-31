import React, { useEffect, useState } from "react";

const LocationComponent = () => {
  const [locationData, setLocationData] = useState(null);
  const [ipData, setIpData] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);

  useEffect(() => {
    checkLocationPermission();
    fetchIpData();
  }, []);

  const checkLocationPermission = () => {
    if ("geolocation" in navigator) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "denied") {
          setPermissionDenied(true);
        } else {
          getLocation();
        }
      });
    } else {
      setLocationData("Geolocation is not supported by this browser.");
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  };

  const showPosition = (position) => {
    const { latitude, longitude, timestamp, ...rest } = position.coords;
    setLocationData({ latitude, longitude, timestamp: new Date(timestamp).toString() });
  };

  const showError = (error) => {
    setPermissionDenied(true);
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
      {permissionDenied ? (
        <p>Location access is denied. Please enable location services to use this feature.</p>
      ) : (
        <div>
          <div>
            <h3>Location Data:</h3>
            {latitude && <p>Latitude: {latitude}</p>}
            {longitude && <p>Longitude: {longitude}</p>}
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
      )}
    </div>
  );
};

export default LocationComponent;
