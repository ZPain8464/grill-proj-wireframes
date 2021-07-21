let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.2361, lng: -97.7827 },
    zoom: 18,
  });

  const location1 = { lat: 30.2364, lng: -97.7834 };
  const location2 = { lat: 30.2362, lng: -97.7827 };
  const location3 = { lat: 30.236, lng: -97.7829 };
  const location4 = { lat: 30.2359, lng: -97.7816 };
  const location5 = { lat: 30.2358, lng: -97.7821 };
  const location6 = { lat: 30.2356, lng: -97.7813 };
  const location7 = { lat: 30.2349, lng: -97.7812 };

  new google.maps.Marker({
    position: location1,
    map,
    icon: "https://i.imgur.com/5nDfCeK.png",
  });
  new google.maps.Marker({
    position: location2,
    map,
    icon: "https://i.imgur.com/8FYpDka.png",
  });
  new google.maps.Marker({
    position: location3,
    map,
    icon: "https://i.imgur.com/dZW3SXP.png",
  });
  new google.maps.Marker({
    position: location4,
    map,
    icon: "https://i.imgur.com/yqE6gad.png",
  });
  new google.maps.Marker({
    position: location5,
    map,
    icon: "https://i.imgur.com/cuoh8PA.png",
  });
  new google.maps.Marker({
    position: location6,
    map,
    icon: "https://i.imgur.com/cpYM8XV.png",
  });
  new google.maps.Marker({
    position: location7,
    map,
    icon: "https://i.imgur.com/cEZqGv1.png",
  });
}
