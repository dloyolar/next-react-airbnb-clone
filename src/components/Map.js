import { useState } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

export const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const coordinates = searchResults.map(({ lat, long }) => ({
    latitude: lat,
    longitude: long,
  }));
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <MapGL
      mapStyle="mapbox://styles/dloyola/cle5q1xt2001501pfdwg6rltq"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map((item) => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(item)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {selectedLocation && selectedLocation.long === item.long ? (
            <Popup
              anchor="top"
              onClose={() => setSelectedLocation({})}
              longitude={item.long}
              latitude={item.lat}
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </MapGL>
  );
};
