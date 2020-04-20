import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);
  return <h1>Hello World</h1>;
};

export default App;
