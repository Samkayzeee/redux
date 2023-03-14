import { useState } from 'react';
import { useSelector } from 'react-redux'; 
import store from './redux/reducer/store';
import { useDispatch } from "react-redux";
import { userActions } from "./redux/reducer/handleUsers";



function App() {
const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [user, setUser] = useState({});


const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    if(name === "" || password === ""){
      console.log("we need fullname");
    }
    else{
      setUser({
        name:name,
        password:password,
      });
      const addUser = () => {
        dispatch(userActions.addUsers(user))
      }
      console.log(store.getState().user);
  }
  }
  return (
    <div className="App">
      
    <form action="" onSubmit={handleSignup}>
      <input type="text" name="" id="user_name"  onInput={(n) => setName(n.target.value)} />
       <br /> <br />
      <input type="password" name="" id="user_password" onInput={(n) => setPassword(n.target.value)} />
      <br /> <br />
      <button type="submit">Sign up</button>
    </form>

    </div>
  )
}

export default App
