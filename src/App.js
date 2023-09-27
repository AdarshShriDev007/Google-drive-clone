import DriveData from "./components/DriveData/DriveData";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_grid">
        <Sidebar />
        <DriveData />
      </div>
    </div>
  );
}

export default App;
