import React from 'react';

export default function Hello({ color, name }) {
  return (
    <div style={{ color }}>
      Hello,
      {' '}
      {name}
    </div>
  );
}
