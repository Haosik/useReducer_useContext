import React, { useState } from 'react';
import ComponentB1 from './ComponentB1';

export interface IComponentBProps {}

export default function ComponentB(props: IComponentBProps) {
  const [showB1, setShowB1] = useState(false);
  return (
    <div>
      I am component B and I render/or not Component B1:
      <div>
        <label htmlFor="showB1">
          <input
            id="showB1"
            type="checkbox"
            checked={showB1}
            onChange={() => setShowB1(!showB1)}
          />
          Show ComponentB1 ?
        </label>
      </div>
      {showB1 && <ComponentB1 />}
    </div>
  );
}
