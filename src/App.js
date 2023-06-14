import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="App ancho">
      <h1>User Information</h1>
      <div className="user-list">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="Avatar" />
            <div className="user-details">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
              <p>Company: {user.company.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;