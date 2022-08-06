import React, { Component } from 'react';
import FlatList from "./flatList";
import flats from "../data/flats";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats,
      selectedFlat: flats[0]
    };
    console.log(this.state.flats)
  }

  center() {
    return {
      //lat: this.state.selectedFlat.lat,
      //lng: this.state.selectedFlat.lng,
      lat: flats[0].lat,
      lng: flats[0].lng,
    };
  }
  selectflat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
    console.log(this.state.selectedFlat);
  }

  render() {
    return (
      <div className="container">
        <FlatList flats={this.state.flats} selectFlat={this.selectflat} selectedFlat={this.state.selectedFlat}/>

        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={11} bootstrapURLKeys={{ key: "" }} >
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}


export default App;
