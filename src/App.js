import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItems from "./components/users/UserItems";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <UserItems />
    </div>
  );
}

export default App;
