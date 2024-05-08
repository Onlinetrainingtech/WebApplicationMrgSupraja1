import React from 'react';
import ReactDOM from 'react-dom/client';

function sample()
{
  return <h1>Welcome to the React Application</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(sample());