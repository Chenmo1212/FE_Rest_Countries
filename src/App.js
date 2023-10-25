import './App.css';
import Home from "./containers/Home/Home";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Home />
        </main>
    </div>
  );
}

export default App;
