import React from 'react';
import { Link } from '@reach/router';

const CompComponent = (props) => {
    
  return (
      <div>
        <div style={{backgroundColor:props.bcolor, color:props.fcolor}}>{isNaN(props.id) ? <p>The word is: {props.id}</p> :<p>The number is: {props.id}</p>}</div>
      </div>
  );
}

export default CompComponent;