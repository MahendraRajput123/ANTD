import * as React from 'react';
import {useState} from 'react';
import Child from './Child';
function App() {
  const [count, setCount] = useState(0);

  const handleClick = (event, num) => {
    console.log(event.target);

    setCount(current => current + num);
  };

  return (
    <div>
      <Child handleClick={handleClick} />

      <h2>Count: {count}</h2>
    </div>
  );
}

export default App;