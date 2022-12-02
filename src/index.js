import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TrashCanGlow from './components/crud/trashCans/TrashCanGlow/TrashCanGlow';
import TrashCanSlam from './components/crud/trashCans/TrashCanSlam/TrashCanSlam';
import TrashCanCircle from './components/crud/trashCans/TrashCanCircle/TrashCanCircle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id='centerAtRoot'>
      <TrashCanCircle deleteEntry={() => { }} />
    </div>
  </React.StrictMode>
);
