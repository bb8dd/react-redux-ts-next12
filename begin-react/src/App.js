import React from 'react';
import Counter from './components/Counter';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="color" isSpecial />
      <Hello color="pink" />
      <Counter />
    </Wrapper>
  );
}

export default App;
