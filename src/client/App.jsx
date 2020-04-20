import React, { useEffect } from 'react';
import { BASE_URL } from './config/api';

const App = () => {
  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);
  return <h1>Hello World</h1>;
};

export default App;
