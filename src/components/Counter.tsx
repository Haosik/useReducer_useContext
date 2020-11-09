import React, { useContext } from 'react';
import { ICounterContext, CounterContext } from '../App';

export interface ICounterProps {}

function Counter(props: ICounterProps) {
  const { value, onIncrement, onDecrement, onReset } = useContext<
    ICounterContext
  >(CounterContext);

  return (
    <div>
      Current count is {value}{' '}
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
      <button type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
export default Counter;
