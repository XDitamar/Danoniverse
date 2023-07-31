import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./LocationComponent.css"; // Import the CSS file for custom styling

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

      // Get additional information using the IP address from ipify
      if (data.ip) {
        fetchLocationData(data.ip);
      }
    } catch (error) {
      setIpData("Failed to fetch IP address.");
    }
  };

  const fetchLocationData = async (ipAddress) => {
    try {
      const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
      const data = await response.json();
      setLocationData((prevData) => ({
        ...prevData,
        isp: data.org,
        country: data.country_name,
        city: data.city,
        device: getDevice(),
      }));
    } catch (error) {
      console.error("Failed to fetch location data.", error);
    }
  };

  const getDevice = () => {
    const { userAgent } = window.navigator;
    if (/OnePlus[\s\S]*ONEPLUS[A-Z\d]{5}/i.test(userAgent)) {
      return "OnePlus 8"; // Customized detection for OnePlus 8
    } else {
      // You can add more custom device detection here based on the userAgent
      return "Unknown";
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

  const { latitude, longitude, timestamp, isp, country, city, device } = locationData || {};

  return (
    <div className="location-container">
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
            {device && <p>Device: {device}</p>}
          </div>

          <div>
            <h3>IP Data:</h3>
            {ipData ? <p>IP Address: {ipData.ip}</p> : <p>Loading IP address...</p>}
          </div>

          {latitude && longitude && (
            <div>
              <h3>Map:</h3>
              <MapContainer center={[latitude, longitude]} zoom={13} className="map-container">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[latitude, longitude]}>
                  <Popup>
                    {country && <p>Country: {country}</p>}
                    {city && <p>City: {city}</p>}
                    {device && <p>Device: {device}</p>}
                    <p>Latitude: {latitude}</p>
                    <p>Longitude: {longitude}</p>
                    {timestamp && <p>Timestamp: {timestamp}</p>}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationComponent;
