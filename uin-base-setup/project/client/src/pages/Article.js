import React from 'react';

function ChildComponent({ title, actor }) {
  return (
    <>
      <li>
        <p>{title}</p>
        <p>{actor}</p>
      </li>
    </>
  );
}

export default ChildComponent;
