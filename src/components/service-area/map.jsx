import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const AnyReactComponent = ({ text }) => <div></div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.530895,
      lng: -119.814972
    },
    zoom: 11
  }

  render() {
    const StyledMap = styled.section`
  height:300px;
  width:100%;
  box-shadow:0 0 15px rgba(0,0,0,0.2);


`
    return (
      <StyledMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCixT0iG2HZkTOLWBd2EKAWEpFK27dn8P0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={39.530895}
            lng={-119.814972}
            text='My Marker'
          />
        </GoogleMapReact>
      </StyledMap>
    )
  }
}

export default SimpleMap
