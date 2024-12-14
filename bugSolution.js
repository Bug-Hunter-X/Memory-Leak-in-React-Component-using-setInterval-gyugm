```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // Correct usage of setInterval with cleanup
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```