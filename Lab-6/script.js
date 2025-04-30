// Coordinates for 10 named locations
const locations = [
    { name: "Chicago, IL", coords: [41.8781, -87.6298] },
    { name: "Los Angeles, CA", coords: [34.0522, -118.2437] },
    { name: "New York, NY", coords: [40.7128, -74.0060] },
    { name: "London, UK", coords: [51.5074, -0.1278] },
    { name: "Tokyo, Japan", coords: [35.6895, 139.6917] },
    { name: "Paris, France", coords: [48.8566, 2.3522] },
    { name: "Moscow, Russia", coords: [55.7558, 37.6173] },
    { name: "Sydney, Australia", coords: [-33.8688, 151.2093] },
    { name: "Mexico City, Mexico", coords: [19.4326, -99.1332] },
    { name: "New Delhi, India", coords: [28.6139, 77.2090] }
  ];
  
  const dashboard = document.getElementById('dashboard');
  const errorDiv = document.getElementById('error');
  const select = document.getElementById('locationSelect');
  const useCurrentBtn = document.getElementById('useCurrentLocation');
  
  // Utility to fetch and display sunrise/sunset data
  async function updateDashboard(lat, lng, label, coords = null) {
    dashboard.innerHTML = '<div class="placeholder">Loading data...</div>';
    errorDiv.style.display = 'none';
  
    try {
      // Fetch for today and tomorrow
      const today = await fetchData(lat, lng, 'today');
      const tomorrow = await fetchData(lat, lng, 'tomorrow');
  
      if (today.status !== "OK" || tomorrow.status !== "OK") {
        throw new Error("API returned an error. Please check your coordinates.");
      }
  
      const displayLabel = coords ? `${label} (Lat: ${coords[0]}, Lng: ${coords[1]})` : label;
  
      dashboard.innerHTML = `
        <div class="card-row">
          ${makeCard("Today", today.results, displayLabel)}
          ${makeCard("Tomorrow", tomorrow.results, displayLabel)}
        </div>
      `;
    } catch (err) {
      errorDiv.textContent = "Error: " + err.message;
      errorDiv.style.display = 'block';
      dashboard.innerHTML = '<div class="placeholder">No data to show.</div>';
    }
  }
  
  // Fetch data from SunriseSunset.io API
  async function fetchData(lat, lng, date) {
    const url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=${date}`;
    const resp = await fetch(url);
    return resp.json();
  }
  
  // Build a card with the 7 required data points
  function makeCard(dayLabel, data, locationLabel) {
    return `
      <div class="card">
        <h2>${dayLabel}${locationLabel ? `<br><span style="font-size:.9em;font-weight:400;color:#888">${locationLabel}</span>` : ""}</h2>
        <ul class="data-list">
          <li>🌅 <strong>Sunrise:</strong> ${data.sunrise}</li>
          <li>🌇 <strong>Sunset:</strong> ${data.sunset}</li>
          <li>🌄 <strong>Dawn:</strong> ${data.dawn}</li>
          <li>🌆 <strong>Dusk:</strong> ${data.dusk}</li>
          <li>🕛 <strong>Solar Noon:</strong> ${data.solar_noon}</li>
          <li>⏳ <strong>Day Length:</strong> ${data.day_length}</li>
          <li>🕒 <strong>Time Zone:</strong> ${data.timezone}</li>
        </ul>
      </div>
    `;
  }
  
  // Handle select list change
  select.addEventListener('change', () => {
    const value = select.value;
    if (!value) {
      dashboard.innerHTML = '<div class="placeholder">Select a location to see sunrise and sunset times.</div>';
      return;
    }
    const [lat, lng] = value.split(',');
    const name = locations[select.selectedIndex - 1].name; 
    const coords = locations[select.selectedIndex - 1].coords;
    updateDashboard(lat, lng, name, coords);
  });
  
  // Handle "Use Current Location" button
  useCurrentBtn.addEventListener('click', () => {
    dashboard.innerHTML = '<div class="placeholder">Getting your location...</div>';
    errorDiv.style.display = 'none';
  
    if (!navigator.geolocation) {
      errorDiv.textContent = "Geolocation is not supported by your browser.";
      errorDiv.style.display = 'block';
      dashboard.innerHTML = '<div class="placeholder">No data to show.</div>';
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        updateDashboard(lat, lng, "Your Location", [lat.toFixed(4), lng.toFixed(4)]);
      },
      err => {
        errorDiv.textContent = "Unable to retrieve your location: " + err.message;
        errorDiv.style.display = 'block';
        dashboard.innerHTML = '<div class="placeholder">No data to show.</div>';
      }
    );
  });
  
  // Show placeholder on load
  window.addEventListener('DOMContentLoaded', () => {
    dashboard.innerHTML = '<div class="placeholder">Select a location or use your current location to see sunrise and sunset times.</div>';
  });
  