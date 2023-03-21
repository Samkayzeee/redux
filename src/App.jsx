import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Login } from './redux/user';
import Profile from './profile';



function App() {
const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [user, setUser] = useState({});

const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
  if (name === "" || password === "") {
    console.log("You're doing something wrong nigga");
  }
  else{
    setUser({
      name:name,
      password:password
    })
    let log =  dispatch(Login.login(user));
    console.log(log);
  }
  }

  const removeUser = () => {
  let remove = dispatch(Login.removeuser(3));
  console.log(remove);
  }
  return (
    <div className="App">
      
    <form action="" onSubmit={handleSignup}>
      <input type="text" name="" id="user_name"  onInput={(n) => setName(n.target.value)} placeholder= "Name..." />
       <br /> <br />
      <input type="password" name="" id="user_password" onInput={(n) => setPassword(n.target.value)} placeholder= "Password..." />
      <br /> <br />
      <button type="submit">Sign up</button>
    </form>
    <br />

    <button onClick={removeUser}>remove</button>


      <div>
        <Profile />
      </div>


    </div>

  )
}

export default App
