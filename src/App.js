import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Blog from './components/Blog/Blog';



function App() {
  return (
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
  );
}

export default App;
