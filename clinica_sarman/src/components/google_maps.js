// GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -27.366090438360324, // Replace with the clinic's latitude
  lng: -70.33045898265893, // Replace with the clinic's longitude
};

function MyGoogleMap() {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Adjust the zoom level as needed
      ></GoogleMap>
    </LoadScript>
  );
}

export default MyGoogleMap;
