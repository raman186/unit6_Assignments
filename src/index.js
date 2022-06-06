import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './components/Profile'
import Todo from './components/Todo';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {
  let data=[
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false }
  ];
  return (
    <div className="App">
      <div className='profile'><Profile /></div>
      <div className='todo'>
      <h1>TODO LIST</h1>

        {data.map((item)=>(
          <Todo title={item.title} status={item.status} />
        ))}
        <Todo />
      </div>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
