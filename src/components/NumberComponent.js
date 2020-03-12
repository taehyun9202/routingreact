import React from 'react';
import { Link } from '@reach/router';

const NumberComponent = (props) => {
    
  return (
      <div>
        <p>The number is: {props.id}</p>
        <Link to = "/home">Welcome</Link>
      </div>
  );
}

export default NumberComponent;