import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';
import User from './components/User/User'

function App() {

const [users, setUsers]= useState ([
  {id:1, name:'somi'},
  {id:2, name:'neda'},
  {id:3, name:'leili'},
  {id:4, name:'azadeh'}
])

useEffect (()=> {
  console.log(' App component Mount');// Mounting
},[])

useEffect (()=> {
  console.log('App component update');// updating
},[users])


  const removeHandler = (userID) => {

    setUsers (prevUsers => {
      let newUsers = prevUsers.filter(user => user.id !== userID)
      return newUsers
    })

  }


  return (
    <div >
      <ul>
        {users.map(user => (
          <User {...user} key={user.id}  onRemove={removeHandler}/>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
