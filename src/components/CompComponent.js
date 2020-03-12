import React from 'react';
import { Link } from '@reach/router';

const CompComponent = (props) => {
    
  return (
      <div>
        <div style={{backgroundColor:props.bcolor, color:props.fcolor}}>The number is: {props.id}</div>
      </div>
  );
}

export default CompComponent;