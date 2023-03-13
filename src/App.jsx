import { useState } from 'react';
import store from './redux/reducer/store';


function App() {

const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [user, setUser] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();
    if(name === "" || password === ""){
      console.log("we need fullname");
    }
    else{
      setUser({
        name:name,
        password:password
      });
      store.dispatch({
        type: "ADDUSERS",
        payload: user
      })
      console.log(store.getState());
    }
  }

  return (
    <div className="App">
      
    <form action="" onSubmit={handleSignup}>
      <input type="text" name="" id=""  onInput={(n) => setName(n.target.value)}/>
       <br /> <br />
      <input type="password" name="" id="" onInput={(n) => setPassword(n.target.value)}/>
      <br /> <br />
      <button type="submit">Sign up</button>
    </form>

    </div>
  )
}

export default App
