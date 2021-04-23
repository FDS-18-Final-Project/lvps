import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

require('dotenv').config();

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      width: '50px',
      height: '20px',
      borderRadius: '5px',
      boxShadow: '0 1px 3px #FFBF00',
      backgroundColor: '#FFBF00',
      position: 'relative',
      border: '5px solid #FFBF00',
      fontSize: '18px',
      textAlign: 'center'
    }}
  >
    {text}
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.75982215186903,
      lng: -79.47634137563207
    },
    zoom: 15,
    lang: 'en'
  };

  render() {
    return (
      <div style={{ height: '340px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.75982215186903}
            lng={-79.47634137563207}
            text="Here!"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
