// script.js

document.addEventListener("DOMContentLoaded", function () {
  var htmlContent = `
    <body onLoad="getLocation()">
      <p id="demo"></p>
    
      <script>
        var x = document.getElementById("demo");
    
        function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
        }
    
        function showPosition(position) {
          x.innerHTML =
            "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
        }
      </script>
    </body>
  `;

  document.body.innerHTML = htmlContent;
});
