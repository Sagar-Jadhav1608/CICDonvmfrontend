import React, { useState } from 'react';
import Todo from './Components/Todos/Todo';
import Login from './Components/Login/Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <h1>Todo Application</h1>
          <Todo />
        </>
      )}
    </div>
  );
}

export default App;
