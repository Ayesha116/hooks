import React, { useState } from 'react';
import './App.css';
import Parent from "./Parent";
import Mycontext from "./Mycontext";

function App() {
  let value = useState(0)
  return (
    <Mycontext.Provider value = {value}>
      <div >
        <Parent>

        </Parent>
        
        
      </div>
    </Mycontext.Provider>
  );
}

export default App;
