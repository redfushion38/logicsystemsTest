import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  //funcion para incluir la api
  const jsonn = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }
  useEffect(jsonn, []);

  //metodo de la caja usuarios
  const frameuser = user => (
    <div className="user-card" key={user.id}>
      <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="Avatar" />
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>City: {user.address.city}</p>
        <p>Company: {user.company.name}</p>
      </div>
    </div>
  )

  return (
    <div className="App">
      <div className="heado">
        <div className="logo">
            <img src="/imgs/logotipo.png" alt="logostudio"></img>
        </div>
      </div>
      <div className='utitle'>
      <h1>Usuarios</h1>
      </div>
      <div className="user-list">
        {users.map(frameuser)}
      </div>
      <div className='final'>
        <div className='finizq'>
          <h3>Informacion:</h3>
          <p>Terminos y condiciones</p>
          <p>Prueba Tecnica 2023</p>
          
        </div>
        <div className='finder'>
          <h3>Contacto:</h3>
          <p>Juan Manuel Gamboa Pereira</p>
          <p>+9381234567</p>
        </div>
      </div>
    </div>
  );
}

export default App;
