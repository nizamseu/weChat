import "./App.css";
import Chat from "./Components/Chat/Chat";
import SideBar from "./Components/SideBar/SideBar";
function App() {
  return (
    <div className="app">
      <div className="app_body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
