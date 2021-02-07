function initMap() {
    // The location of Uluru
    const hotel = { lat: 52.1104900, lng: 20.8880950};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: hotel,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: hotel,
      map: map,
    });

    const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: hotel,
        radius: 11000,
      });
  }