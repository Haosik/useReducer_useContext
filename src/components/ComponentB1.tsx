import React, { useContext } from 'react';
import { CounterContext } from '../App';
import Counter from './Counter';

export interface IComponentB1Props {}

export default function ComponentB1(props: IComponentB1Props) {
  const { value } = useContext(CounterContext);
  return (
    <>
      <div>I am component B1 I can show current counter: {value}</div>
      <Counter />
    </>
  );
}
