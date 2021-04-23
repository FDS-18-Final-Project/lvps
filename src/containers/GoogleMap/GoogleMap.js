// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// class GoogleMap extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={15}
//         style={{ width: '100%', height: '300px' }}
//         initialCenter={{ lat: 43.75982215186903, lng: -79.47634137563207 }}
//       >
//         <Marker
//           position={{ lat: 43.75982215186903, lng: -79.47634137563207 }}
//         />
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
// })(GoogleMap);

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Icon from 'components/Icon/Icon';

const AnyReactComponent = () => (
  <div
    style={{
      width: '35px',
      height: '40px',
      position: 'relative'
    }}
  >
    <Icon type="pin" />
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.75982215186903,
      lng: -79.47634137563207
    },
    zoom: 15
  };

  render() {
    return (
      <div style={{ height: '340px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={43.75982215186903} lng={-79.47634137563207} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
