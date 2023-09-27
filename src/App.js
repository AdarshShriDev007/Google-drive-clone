import { useEffect } from "react";
import DriveData from "./components/DriveData/DriveData";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { useUserContext } from "./context/UserContext";
import {auth,onAuthStateChanged} from "./firebase";

function App() {

  const userInfo = useUserContext();

  useEffect(()=>{
    onAuthStateChanged(auth,(userData)=>{
      if(userData)
      {
        userInfo.setUser({
          photoURL : userData.photoURL,
          uid : userData.uid 
      })
      }
      else{
        userInfo.setUser(null);
      }
    })
  },[]);

  return (
    <>
      {
        !userInfo.user ? (<Login />) : (<div className="App">
        <Header />
        <div className="app_grid">
          <Sidebar />
          <DriveData />
        </div>
      </div>)
      }
    </>
    
  );
}

export default App;
