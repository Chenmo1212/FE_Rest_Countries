import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./containers/Home/Home";
import Header from "./components/Header/Header";
import Country from "./containers/Country/Country";


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/countries/:name" element={<Country/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
