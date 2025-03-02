import React from 'react';
import './Styles/App.css';
import Chats from './Component/Chats';
import VueChats from './Component/VueChat';

function App() {
  
  return (
    <div className="App">
      <div className="App-header">
        <Chats/>
        
      </div>
      <div>
      <VueChats/>
      </div>
    </div>
  );
}

export default App;
