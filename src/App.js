import "./App.css";
import { Outlet } from "react-router-dom";
import Login from "./components/login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/userSlice";

function App() {
  const {user} = useSelector(state=> state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if (userAuth){
          //console.log(userAuth)
          dispatch(login({
              uid : userAuth.uid,
              email : userAuth.email
          }))
      }else{
          dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])
  
  return (
    <div className="App">
     { user ? <Outlet /> : <Login/> } 
    </div>
  );
}

export default App;
