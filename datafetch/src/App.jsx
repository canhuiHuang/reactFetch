import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    try {
      const res = await fetch('https://reqres.in/api/users/');
      const data = await res.json();
      console.log(data);
      setUsers(data.data);
    } catch (error) {
      console.log(error)
    }
  }, [])

  const renderUsers = () => {
    return users.map((user, index) =>
      <div key={index} className="user-container" style={containerStyle}>
        <img src={user.avatar} alt="" style={{
          width: '50px',
          borderRadius: '50%',
          marginBottom: '0.7rem'
        }} />
        <p className="name">{`${user.first_name} ${user.last_name}`}</p>
        <p className="email">email: {user.email}</p>
      </div>
    )
  }
  const containerStyle = {
    display: 'flex',
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Fetch Data Sandbox</p>
        {users.length > 0 ? renderUsers() : 'Loading...'
        }
      </header>
    </div>
  )
}

export default App
