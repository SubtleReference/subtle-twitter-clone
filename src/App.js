import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";



function App() {
  return (
    // BEM Convention
    <div className="app">
      <Sidebar />

      <Feed />

      
      <Widgets />
    </div>
  );
}

export default App;
