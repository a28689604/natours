/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYTI4Njg5NjA0IiwiYSI6ImNsMjRnNnJoczF6emczY3BkdmVvbXV3cnIifQ.pUd766sNlcNlArKov8O-jQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/a28689604/cl24h2co2005914qhr686b8vz',
    scrollZoom: false,
    // center: [-118, 34],
    // zoom: 4,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(
        `<p>
        Day ${loc.day}:${loc.description}
      </p>`
      )
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);

    map.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        left: 100,
      },
    });
  });
};
