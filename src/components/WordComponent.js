import React from 'react';
import { Link } from '@reach/router';

const WordComponent = (props) => {
    
  return (
      <div>
        <p>The word is: {props.id}</p>
      </div>
  );
}

export default WordComponent;