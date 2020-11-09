import React, { createContext, useCallback, useReducer } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import Counter from './components/Counter';

export interface ICounterContext {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const defaultCounterContextValues: ICounterContext = {
  value: 0,
  onIncrement: () => {},
  onDecrement: () => {},
  onReset: () => {},
};

export const CounterContext = createContext<ICounterContext>(
  defaultCounterContextValues
);
interface IAppState {
  counterValue: number;
}

const initialAppState = {
  counterValue: 0,
};

interface IAction {
  type: string;
  payload?: any;
}

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_RESET = 'COUNTER_RESET';

const counterReducer = (state: IAppState, action: IAction) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return { ...state, counterValue: state.counterValue + 1 };
    }
    case COUNTER_DECREMENT: {
      return { ...state, counterValue: state.counterValue - 1 };
    }
    case COUNTER_RESET: {
      return { ...state, counterValue: 0 };
    }
    default: {
      return state;
    }
  }
};

function App() {
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    initialAppState
  );

  const handleIncrement = useCallback(
    () => counterDispatch({ type: COUNTER_INCREMENT }),
    [counterDispatch]
  );
  const handleDecrement = useCallback(
    () => counterDispatch({ type: COUNTER_DECREMENT }),
    [counterDispatch]
  );
  const handleReset = useCallback(
    () => counterDispatch({ type: COUNTER_RESET }),
    [counterDispatch]
  );

  return (
    <div className="App">
      <CounterContext.Provider
        value={{
          value: counterState.counterValue,
          onIncrement: handleIncrement,
          onDecrement: handleDecrement,
          onReset: handleReset,
        }}
      >
        <Counter />
        <ComponentA />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
