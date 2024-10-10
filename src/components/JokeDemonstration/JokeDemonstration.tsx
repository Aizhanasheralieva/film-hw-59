import React from 'react';

const JokeDemonstration = ({joke}) => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{joke}</p>
      </div>
    </div>
  );
};

export default JokeDemonstration;