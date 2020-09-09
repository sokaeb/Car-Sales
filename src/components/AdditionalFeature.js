import React from 'react';
// import { addFeatures } from '../actions/index';

const AdditionalFeature = props => {
//  console.log('feature', props.feature)

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" 
        onClick={() => {props.addFeatures(props.feature)}}
      
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
