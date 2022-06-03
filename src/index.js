import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Card from './comonents/staticCard'

// import App from './App';
import reportWebVitals from './reportWebVitals';


function App() {
  return (
    <div className="App">
      
      <Card />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
