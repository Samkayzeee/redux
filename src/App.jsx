import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Login } from './features/user';
// import store from './redux/reducer/store';
import { userActions } from "./redux/reducer/handleUsers";



function App() {
const [name, setName] = useState("");
const [password, setPassword] = useState("");
// const [user, setUser] = useState({});

const dispatch = useDispatch();
// const user = useSelector((state) => state.user.value);



  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(Login({name: name, password: password}))
  }

  return (
    <div className="App">
      
    <form action="" onSubmit={handleSignup}>
      <input type="text" name="" id="user_name"  onInput={(n) => setName(n.target.value)} placeholder={"Name..."}/>
       <br /> <br />
      <input type="password" name="" id="user_password" onInput={(n) => setPassword(n.target.value)} placeholder={"Password..."} />
      <br /> <br />
      <button type="submit">Sign up</button>
    </form>



{/* <div>
  <h1>User is down Below</h1>
  <p>name: {user.name}</p>
  <p>password: {user.password}</p>
</div> */}
    </div>

  )
}

export default App
