import { createContext, useState } from 'react'
import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home"
import { auth, firebase } from './services/firebase'
import { BrowserRouter, Route } from 'react-router-dom'

type User = {
  id: String;
  name: String;
  avatar: String;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {
  const [user, setUser] = useState<User>()

  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result =>{
      if(result.user) {
        const { displayName, photoURL, uid } = result.user;

        if(!displayName || !photoURL){
          throw new Error("Missing information");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })


      }
        console.log(result);
        //history.push('/rooms/new');
    })
  }
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Route path="/" exact component={Home}></Route>
        <Route path="/rooms/new" component={NewRoom}></Route>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
