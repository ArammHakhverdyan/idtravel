import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.198961332346066,
      lng: 44.49069758177285
    },
    zoom: 16
  };

  render() {
    return (
      <div style={{
        height: '400px',
        width: '500px',
        marginTop: "40px",
      }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBabXGDNHaGD1A-xNxkW-hxDVGXL2-PZf4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.198961332346066}
            lng={44.49069758177285}
            text={<LocationOnIcon></LocationOnIcon>}

          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;