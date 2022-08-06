import React, { Component } from 'react';
import Flat from "./flat";

// eslint-disable-next-line react/prefer-stateless-function
const FlatList = (props) => {

  return (
    <div className="flat-list">
     {props.flats.map((flat, index) => {
      return (
        <Flat imageUrl={flat.imageUrl} price={flat.price} name={flat.name} key={flat.lat} selected={flat.name === props.selectedFlat.name} selectFlat={props.selectFlat} index={index} />)
      })
     }
    </div>
  );
};

export default FlatList;
