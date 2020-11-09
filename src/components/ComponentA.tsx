import React from 'react';
import ComponentB from './ComponentB';

export interface IComponentAProps {}

export default function ComponentA(props: IComponentAProps) {
  return (
    <div>
      I am component A and I render component B <ComponentB />{' '}
    </div>
  );
}
