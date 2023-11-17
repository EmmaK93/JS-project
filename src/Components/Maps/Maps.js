import React from 'react';
import GoogleMapReact from 'google-map-react';

const Maps = () => {
  return (
    <>
    <div style={{ height: '100vh', width: '100%', margin:'50px 0' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
      >
        {/* Add your markers here */}
      </GoogleMapReact>
    </div>
    </>
  )
}

export default Maps